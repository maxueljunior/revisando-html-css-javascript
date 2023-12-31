import { domInject } from '../decorators/dom-inject.js';
import { inspect } from '../decorators/inspect.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-execucao.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { NegociacoesDoDia } from '../interfaces/negociacao-do-dia.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesService } from '../services/negociacoes-service.js';
import { imprimir } from '../utils/imprimir.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {

    @domInject('#data')
    private inputData: HTMLInputElement;

    @domInject('#quantidade')
    private inputQuantidade: HTMLInputElement;

    @domInject('#valor')
    private inputValor: HTMLInputElement;

    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private service = new NegociacoesService();

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    public importaDados(): void{
        
        this.service.obterNegociacoes()
            .then(negociacoesDeHoje => {
                return negociacoesDeHoje.filter(negociacoesDeHoje => {
                    return !this.negociacoes
                        .lista()
                        .some(negociacao => negociacao
                            .ehIgual(negociacoesDeHoje)
                        )
                })
            })
            .then(negociacoesDeHoje => {
                negociacoesDeHoje.forEach(n => {
                    this.negociacoes.adiciona(n);
                    this.negociacoesView.update(this.negociacoes);
                })
            });
    }

    @inspect
    @logarTempoDeExecucao()
    public adiciona(): void {
        /*
            Zé, você já viu isso?
        */
        const negociacao = Negociacao.criaDe(
            this.inputData.value, 
            this.inputQuantidade.value,
            this.inputValor.value
        );
     
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView
                .update('Apenas negociações em dias úteis são aceitas');
            return ;
        }

        this.negociacoes.adiciona(negociacao);
        imprimir(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO 
            && data.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
}

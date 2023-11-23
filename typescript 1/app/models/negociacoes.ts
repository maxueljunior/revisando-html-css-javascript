import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    // private negociacoes: Array<Negociacao> = [];
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao): void{
        this.negociacoes.push(negociacao);
    }

    // listar(): ReadonlyArray<Negociacao>{
    public listar(): readonly Negociacao[]{
        return this.negociacoes;
    }

}


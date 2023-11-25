import { Comparavel } from '../interfaces/comparavel.js';
import { Modelo } from '../interfaces/modelo.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Modelo<Negociacoes>{
    
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public ehIgual(objeto: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) == JSON.stringify(objeto.lista());
    }

    public paraTexto(): string {
        return ``;
    }
}

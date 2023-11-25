export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    ehIgual(objeto) {
        return JSON.stringify(this.negociacoes) == JSON.stringify(objeto.lista());
    }
    paraTexto() {
        return ``;
    }
}
//# sourceMappingURL=negociacoes.js.map
const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}

const elementoMenoValor = document.getElementById('menor-valor')
elementoMenoValor.textContent = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.textContent = maiorValor
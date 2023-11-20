export default function ehMaiorDeIdade(campo){
    const dataNascimento = new Date(campo.value)
    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity('O usuario não e maior de idade')
    }
}

function validaIdade(dataNascimento){
    const dataAtual = new Date()
    const dataMais18 = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDate())

    return dataAtual >= dataMais18
}
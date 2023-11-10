function tocaSom(idElementAudio){
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(x => {
    const classe = x.classList[1];
    const audio = `#som_${classe}`;
    x.onclick = function() {
        tocaSom(audio)
    };
});
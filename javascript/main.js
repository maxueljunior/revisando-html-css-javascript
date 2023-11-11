function tocaSom(idElementAudio){
    const elemento = document.querySelector(idElementAudio);

    if(elemento != null ){
        if(elemento.localName === 'audio'){
            elemento.play();
        }
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(x => {
    const classe = x.classList[1];
    const audio = `#som_${classe}`;

    x.onclick = function() {
        tocaSom(audio)
    };

    x.onkeydown = function(evento) {
6
        if(evento.key == 'Enter' || evento.key == 'Space'){
            x.classList.add('ativa');
        }
        
    }
    
    x.onkeyup = function() {
        x.classList.remove('ativa');
    }
});
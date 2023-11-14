const containerVideos = document.querySelector(".videos__container")

async function buscarEMostrarVideos(){
    try{
        const busca = await fetch("http://localhost:3000/videos");
        const videos = await busca.json();

        videos.forEach((video) => {
            if(video.categoria == ""){
                throw new Error("Video não tem caregoria")
            }
            containerVideos.innerHTML += `
                    <li class="videos__item">
                        <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                        <div class="descricao-video">
                            <img class="img-canal" src="${video.imagem}">
                            <h3 class="titulo-video">${video.titulo}</h3>
                            <p class="titulo-canal">${video.canal}</p>
                        </div>
                    </li>
                `
        })
    }catch(error){
        containerVideos.innerHTML = `<p>Houve um erro ao carregar os videos ${error}</p>`
    }
}

buscarEMostrarVideos();

const barraDePesquisa = document.querySelector(".pesquisar__input")

barraDePesquisa.addEventListener('input', filtarPesquisa)

function filtarPesquisa(){
    const videos = document.querySelectorAll(".videos__item")

    if(barraDePesquisa.value != ""){
        for(let video of videos){
            let titulo = video.querySelector('.titulo__video').textContent.toLowerCase()
            let valorFiltro = barraDePesquisa.value.toLowerCase()

            if(!titulo.includes(valorFiltro)){
                video.style.display = "none";
            }else{
                video.style.display = "block";
            }
        }
    }else{
        videos.style.display = "block";
    }
}
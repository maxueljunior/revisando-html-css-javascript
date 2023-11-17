import { conectaApi } from "./conectaApi.js"

const lista = document.querySelector("[data-lista]")

function constroiCard(e){
    const video = document.createElement("li")
    video.className = "videos__item"
    video.innerHTML = `
        <iframe width="100%" height="72%" src="${e.url}"
                title="${e.titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${e.imagem}" alt="logo canal alura">
                <h3>${e.titulo}</h3>
                <p>${e.descricao}</p>
            </div>
    `
    return video
}

async function listaVideo(){
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(element => {
        lista.appendChild(constroiCard(element))
    });
}

listaVideo()
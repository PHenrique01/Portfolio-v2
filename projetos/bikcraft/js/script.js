// Esse bloco de código vai ativar link do menu
const links = document.querySelectorAll(".header-menu a")

function ativarLink(link){
    const url = window.location.href
    const href = link.href
    if(url.includes(href)){
        link.classList.add("ativo")
    }
    console.log(link)
}

links.forEach(ativarLink)

// Esse bloco de código vai ativar o item que foi selecionado para o orçamento
const paramentros = new URLSearchParams(location.search)

function ativarProduto(paramentro){
    const elemento = document.getElementById(paramentro)
    if(elemento){
        elemento.checked = true
    }
}

paramentros.forEach(ativarProduto)

// Esse bloco de código vai abrir/esconder o texto da pergunta
const perguntas = document.querySelectorAll(".perguntas button")

function ativarPergunta(event){
    const pergunta = event.currentTarget
    const controls = pergunta.getAttribute("aria-controls")
    const resposta = document.getElementById(controls)

    resposta.classList.toggle("ativa")
    const ativa = resposta.classList.contains("ativa")
    pergunta.setAttribute("aria-expanded", ativa)
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener("click", ativarPergunta)
}

perguntas.forEach(eventosPerguntas)

// Esse bloco de código vai trocar a imagem e colocar em cima dos outros
const galeria = document.querySelectorAll(".bicicleta-imagens img")
const galeriaContainer = document.querySelector(".bicicleta-imagens")

function trocarImagem(event){
    const img = event.currentTarget
    const media = matchMedia("(min-width: 1000px)").matches
    if(media){
        galeriaContainer.prepend(img)
    }
}

function eventosGaleria(img){
    img.addEventListener("click", trocarImagem)
}

galeria.forEach(eventosGaleria)

// Animação

if(window.SimpleAnime){
    new SimpleAnime()
}
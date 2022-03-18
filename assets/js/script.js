const elementoNome = document.getElementById('nome');
const elementoImg = document.querySelector('#imagem'); 
let elementoBtn = document.querySelector('#alterar');

elementoBtn.addEventListener('click', ()=>{

    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = './Media/terra0.png';
        elementoNome.innerText = 'Sou uma semente!';
        elementoBtn.value = 'segundo';

    } else if(elementoBtn.value == 'segundo') {
        elementoImg.src = './Media/terra1.png';
        elementoNome.innerText = 'Sou uma plantinha!';
        elementoBtn.value = 'terceiro';

    } else {
        elementoImg.src = './Media/terra2.png';
        elementoNome.innerText = 'Sou um pé de milho!';
        elementoBtn.value = 'primeiro';
    }
})
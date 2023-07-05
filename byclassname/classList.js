let jan = document.getElementById("janela");
let botao = document.getElementById("botao");
let botao1 = document.getElementById("botao1");
let botao2 = document.getElementById("botao2");
let botao3 = document.getElementById("botao3");
let botao4 = document.getElementById("botao4");
let botao5 = document.getElementById("botao5");
let botao6 = document.getElementById("botao6");

botao.addEventListener("click", function(){
    let jan = document.getElementById("janela");

    jan.classList.toggle("vermelho");
})

botao1.addEventListener('click', function(){
    let jan = document.getElementById("janela");

   jan.classList.toggle("verde");
})

botao2.addEventListener('click', function(){
    let jan = document.getElementById("janela");

   jan.classList.toggle("amarelo");
})

botao3.addEventListener('click', function(){
    let jan = document.getElementById("janela");

   jan.classList.toggle("marrom");
})
botao4.addEventListener('click', function(){
    let jan = document.getElementById("janela");

   jan.classList.toggle("gelo");
})

botao5.addEventListener('click', function(){
    let jan = document.getElementById("janela");

   jan.classList.toggle("rosa");
})

botao6.addEventListener('click', function(){
    let jan = document.getElementById("janela");

   jan.classList.toggle("cinza");
})


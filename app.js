let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', `Escolha um número de 1 a ${numeroMaximo}`);

function verificarChute() {
    //precisa ter o .value para pegar o valor do input
    let chute = parseInt(document.querySelector('input').value);
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * numeroMaximo) + 1;
}
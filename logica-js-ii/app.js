let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

console.log(numeroSecreto);
exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um número de 1 a ${numeroMaximo}`);
}

function verificarChute() {
    //precisa ter o .value para pegar o valor do input
    let chute = parseInt(document.querySelector('input').value);

    if (chute == numeroSecreto) {
        let palavraTexto = tentativas == 1 ? 'tentativa' : 'tentativas';

        exibirTextoNaTela('h1', 'Parabéns, você acertou!');
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTexto}!`);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior');
    }
    
    tentativas ++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * numeroMaximo) + 1;
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;

    exibirMensagemInicial();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}                                       
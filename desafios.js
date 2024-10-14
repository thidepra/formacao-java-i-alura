//Desafios no final das aulas do curso
//Desafio 1
//2
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

//3
//no index: <button onclick="exibeMensagemNoConsole()" class="button">Console</button>
function exibeMensagemConsole() {
    console.log('O botão foi clicado');
}

//4
//no index: <button onclick="exibeAlerta()" class="button">Console</button>
function exibeAlerta() {
    alert('Eu amo JS');
}

//5
//no index: <button onclick="perguntaCidade()" class="button">Console</button>
function perguntaCidade() {
    let nomeCidade = prompt('Digite o nome de uma cidade do Brasil que você já esteve:');
    alert(`Estive em ${nomeCidade} e lembrei de você.`);
}

//6
//no index: <button onclick="somaValores()" class="button">Console</button>
function somaValores() {
    let valor1 = prompt('Digite o primeiro número:');
    let valor2 = prompt('Digite o segundo número:');
    let resultado = valor1 + valor2;
    alert(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);
}

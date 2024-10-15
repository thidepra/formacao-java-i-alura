//Desafios no final das aulas do curso
//Desafio 1
//2
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

//3
//no index: <button onclick="exibeMensagemNoConsole()" class="button">Console</button>
function exibirMensagemConsole() {
    console.log('O botão foi clicado');
}
exibirMensagemConsole();

//4
//no index: <button onclick="exibeAlerta()" class="button">Console</button>
function exibirAlerta() {
    alert('Eu amo JS');
}
exibirAlerta();

//5
//no index: <button onclick="perguntaCidade()" class="button">Console</button>
function perguntarCidade() {
    let nomeCidade = prompt('Digite o nome de uma cidade do Brasil que você já esteve:');
    alert(`Estive em ${nomeCidade} e lembrei de você.`);
}
perguntarCidade();

//6
//no index: <button onclick="somaValores()" class="button">Console</button>
function somarValores() {
    let valor1 = prompt('Digite o primeiro número:');
    let valor2 = prompt('Digite o segundo número:');
    let resultado = valor1 + valor2;
    alert(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);
}
somarValores();

//Desafio 2
//1
function exibirOlaMundo() {
    console.log('Olá, mundo!');
}
exibirOlaMundo();

//2
function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}!`);
}
exibirOlaNome('Bianca');

//3
function calcularDobro(numero) {
    return numero * 2;
}
let resultado = calcularDobro(5);
console.log(resultado);

//4
function calcularMedia(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}
let media = calcularMedia(5, 7, 10);
console.log(media);

//5
function verificarNumeroMaior(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}
let numeroMaior = verificarNumeroMaior(5, 7);
console.log(numeroMaior);

//6
function calcularQuadrado(numero) {
    return numero * numero;
}
let resultadoQuadrado = calcularQuadrado(3);
console.log(resultadoQuadrado);

//Desafio 3
//1 IMC = peso / (altura * altura)
//let altura = parseFloat(document.querySelector('input').value);
let alturaMetros = 1.70; //em metros
let pesoMetros = 60; //em kg

function calcularIMC(altura, peso) {
    return peso / (altura * altura);
}

let imc = calcularIMC(alturaMetros, pesoMetros);
console.log(`Seu IMC é ${imc.toFixed(2)}`);

//2 fatorial 3! = 3 * 2 * 1 = 6
// let numero = parseInt(document.querySelector('input');
// numero.valueOf;
let numero = 5;

function calcularFatorial(numero) {
    if (numero == 0 || numero == 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

let resultadoFatorial = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultadoFatorial}`);

//3
let valorDolar = 100;
let cotacaoDolar = 4.80;

function converterDolarParaReal(dolar, cotacao) {
    return dolar * cotacao;
}

let valorReal = converterDolarParaReal(valorDolar, cotacaoDolar);
console.log(`O valor em US$ ${valorDolar} é equivalente a R$ ${valorReal.toFixed(2)}.`);


//4 perimetro retangulo P = 2 * (a + b)
let alturaSala = 4; //em metros
let larguraSala = 5; //em metros

function calcularAreaPerimetro(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`A área da sala é ${area} metros quadrados.`);
    console.log(`O perímetro da sala é ${perimetro} metros.`);
}

calcularAreaPerimetro(alturaSala, larguraSala);

//5 area circulo A = PI * r * r
//perimetro circulo P = 2 * PI * r
let raio = 4; //em metros

function calcularAreaPerimetroCirculo(raio) {
    let areaCirculo = Math.PI * raio * raio;
    let perimetroCirculo = 2 * Math.PI * raio;

    console.log(`A área do círculo é ${areaCirculo.toFixed(2)}`);
    console.log(`O perímetro do círculo é ${perimetroCirculo.toFixed(2)}`);
}

calcularAreaPerimetroCirculo(raio);

//6
// let numero1 = parseInt(document.querySelector('input').value);
let multiplicador = 5;

function calcularTabuada(multiplicador) {
    for (let i = 1; i <= 10; i++) {
        let resultado = multiplicador * i;
        console.log(`${multiplicador} x ${i} = ${resultado}`);
    }
}

calcularTabuada(multiplicador);

//Desafio 4
//1
let listaGenerica = [];

//2
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python', 'C', 'C++'];

//3 
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
console.log(linguagensDeProgramacao);

//4
let listaDeNomes = ['Bianca', 'Rodrigo', 'Anita'];
console.log(listaDeNomes[0]);

//4
console.log(listaDeNomes[1]);

//5
console.log(listaDeNomes[2]);
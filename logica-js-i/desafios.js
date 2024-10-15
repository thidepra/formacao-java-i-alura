//Desafios no final das aulas do curso
//Desafio 1
//1
alert('Boas vindas ao nosso site!');
//2
let nome = 'Lua';
//3
let idade = 25;
//4
let numeroDeVendas = 50;
//5
let saldoDisponivel = 1000;

//6
alert('Erro! Preencha todos os campos');

//7
let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

//8
let nomeD = prompt('Digite seu nome');
//9
let idadeD = prompt('Digite sua idade')
//10
if (idadeD <= 18) {
    alert('Pode tirar a habilitação')
}


//Desafio 2
//1
let diaDaSemana = prompt('Que dia da semana é hoje?');

if (diaDaSemana == 'sabado') {
    alert('Bom final de semana!');
} else if (diaDaSemana == domingo) {
    alert('Bom final de semana!');
} else {
    alert('Boa semana');
}

//2
let numero = prompt('Digite um número');

if (numero > 0) {
    alert(`O número digitado ${numero} é par.`);
} else {
    alert(`O número digitado ${numero} é ímpar.`);
}

//3
let pontuacao = prompt('Digite a pontuacao do jogo');

if(pontuacao >= 100) {
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar.');
}

//4
let saldoDaConta = 1000;
alert(`O saldo da conta é R$ ${saldoDaConta} reais.`);

//5
let nomeUsuario = prompt('Qual o seu nome?');
alert(`Boas vindas, ${nomeUsuario}!`)

//Desafio 3
//1
let contador = 1;

while(contador <= 10) {
    console.log(contador);
    contador++;
}

//2
let contador1 = 10;

while(contador1 >= 0) {
    console.log(contador1);
    contador1--;
}

//3
let numeroRegressivo = prompt('Digite um numero para a contagem regressiva:');

while (numeroRegressivo >= 0) {
    console.log(numeroRegressivo);
    numeroRegressivo--;
}

//4
let numeroProgressivo = prompt('Digite um numero para a contagem progressiva:');
let contador2 = 0;

while (contador2 <= numeroProgressivo) {
    console.log(contador2);
    contador2++;
}

//Desafio 4
//1
console.log('Bem vindo!');

//2
let name1 = 'Thiane';
console.log(`Olá, ${name1}!`);

//3
let name2 = 'Thiane';
alert(`Olá, ${name2}!`);

//4
let linguagem = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagem);

//5
let valor1 = 35;
let valor2 = 5;
let resultado = valor1 + valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}`);

//6
let valor3 = 7;
let valor4 = 5;
let resultado1= valor3 - valor4;
console.log(`A soma entre ${valor1} e ${valor2} é igual a ${resultado}`);


//7
let idade1 = prompt('Digite a sua idade');
if (idade1 >= 18) {
    console.log('Você é maior de idade');
} else {
    console.log('Você é menor de idade');
}

//8
let numero1 = parseInt(prompt('Insira um número'));
if (numero1 > 0) {
    console.log('O número é positivo');
} else if (numero1 < 0) {
    console.log('O numero é negativo');
} else {
    console.log('O número é zero');
}

//9
let numero2 = 1;
while (numero2 <= 10) {
    console.log(numero2);
    numero2 ++;
}

//10    
let nota = 9.5;
if (nota >= 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

//11
let numero3 = Math.random();
console.log(numero3);

//12
let numero4 = parseInt(Math.random() * 10) + 1;
console.log(numero4);

//13
let numero5 = parseInt(Math.random() * 1000) + 1;
console.log(numero5);

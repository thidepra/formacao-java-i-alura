//Desafios no final das aulas do curso
//Desafio 1
//1
function exibeOlaMundo() {
    console.log('Olá, mundo!');
}
exibeOlaMundo();

//2
function exibeOlaNome(nome) {
    console.log(`Olá, ${nome}!`);
}
exibeOlaNome('Bianca');

//3
function calculaDobro(numero) {
    return numero * 2;
}
let resultado = calculaDobro(5);
console.log(resultado);

//4
function calculaMedia(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}
let media = calculaMedia(5, 7, 10);
console.log(media);

//5
function verificaNumeroMaior(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}
let numeroMaior = verificaNumeroMaior(5, 7);
console.log(numeroMaior);

//6
function calculaQuadrado(numero) {
    return numero * numero;
}
let resultadoQuadrado = calculaQuadrado(3);
console.log(resultadoQuadrado);
//Aula 3
//6 - Calculadora de Média e Situação do Aluno
let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;
let media;

function calcularMedia(nota1, nota2, nota3, nota4) {
    media = (nota1 + nota2 + nota3 + nota4) / 4;
    return media;
}

function verificaAprovacao(media) {
    return media >= 5 ? 'Aprovado': 'Reprovado';
}

media = calcularMedia(nota1, nota2, nota3, nota4);
let resultado = verificaAprovacao(media);
console.log(`Média: ${media} - Situação: ${resultado}`);

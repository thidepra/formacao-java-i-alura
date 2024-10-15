alert('Bem vindo ao jogo do número secreto');

let numeroMax = 1000;
//Math.random() gera um número aleatório entre 0(inclusivo) e 1(exclusivo)
//parseInt() transforma o número em inteiro
let numeroSecreto = parseInt(Math.random() * numeroMax) + 1;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    //Template strings: usa-se a crase (interpolação de variáveis)
    chute = prompt(`Escolha um número entre 1 e ${numeroMax}`);

    //se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;                
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        
        tentativas ++;
    }
}

//operador ternário: se tentativas for maior que 1, palavraTentativa recebe 'tentativas', senão recebe 'tentativa'
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
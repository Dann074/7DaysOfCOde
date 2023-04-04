/*Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!

Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido. */

//Primeiro código

const initialValue = 7;
let chute = "";
let acertou = false;

for(let contador = 2; contador >= 0; contador -= 1){    
    chute = prompt("Tente adivinhar o número de 0 a 10:");
    if(chute == initialValue){
        alert(`Parabéns, você acertou! O número era ${initialValue}.`);
        acertou = true;
        break;
    }
    alert(`Errado! Chances restantes: ${contador}`);
}
if(!acertou){
    alert(`Infelizmente, você não acertou. O número era ${initialValue}!`);
}

//Código com numero randomizado

const initialValue1 = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let chute1 = "";
let acertou1 = false;

for(let contador = 2; contador >= 0; contador -= 1){    
    chute1 = prompt("Tente adivinhar o número de 0 a 10:");
    if(chute1 == initialValue1){
        alert(`Parabéns, você acertou! O número era ${initialValue1}.`);
        acertou1 = true;
        break;
    }
    alert(`Errado! Chances restantes: ${contador}`);
}
if(!acertou1){
    alert(`Infelizmente, você não acertou. O número era ${initialValue1}!`);
}
// Meta: Math.random, modularização e validação.
// Enunciado: Gere N números únicos entre [min, max]. Permita semente (--seed=123) para resultados determinísticos.
// Uso:
// node main.js 1 60 6 --seed=123

// Rodar como CLI e receber os parâmetros via linha de comando (você não digita os números sorteados; você informa min, max, quantos (N) e, opcionalmente, a seed).

///declarações
const numerosAleatorios = []

// require seedrandom
const seedrandom = require("seedrandom");

//recebe argumentos da cli //iterar sobre argv.  //operador rest para um possível argumento = --seed 
const [minStr, maxStr, qtdStr, ...rest] = process.argv.slice(2);

//const para verificar se há --seed // método startsWith garante que sempre pode ser um "--seed" ignorando o valor atribuido depois
const seedArg = rest.find((element) => element.startsWith('--seed='));

//se existir o "--seed", então o valor númerico da semente vai ser pego
const seed = seedArg ? Number(seedArg.split('=')[1]) : null;

//definir se será usado seedrandom ou math.random
const rng = seed ? seedrandom(seed) : Math.random;


// funcao -> definir menor e maior número e a quantidade de números nele e gerar o math.random
function getRandomIntInclusive(min, max, qtd) {
    min = Math.ceil(min);
    max = Math.floor(max);

    for (let i = 0; i <= qtd; i++){
    let n = Math.floor(rng() * (max - min + 1)) + min;
    numerosAleatorios.push(n);
    }
};

//gerar e imprimir

getRandomIntInclusive(minStr, maxStr, qtdStr);
console.log(`Os números aleatórios são: [${numerosAleatorios.join(' ')}]`);


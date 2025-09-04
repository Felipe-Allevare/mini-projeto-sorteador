// Meta: Math.random, modularização e validação.
// Enunciado: Gere N números únicos entre [min, max]. Permita semente (--seed=123) para resultados determinísticos.
// Uso:
// node main.js 1 60 6 --seed=123

// Rodar como CLI e receber os parâmetros via linha de comando (você não digita os números sorteados; você informa min, max, quantos (N) e, opcionalmente, a seed).

///declarações
const numerosAleatorios = []
//recebe argumentos da cli
const [minStr, maxStr, qtdStr] = process.argv.slice(2);
//iterar sobre argv. 

// funcao -> definir menor e maior número e a quantidade de números nele e gerar o math.random
function getRandomIntInclusive(min, max, qtd) {
    min = Math.ceil(min);
    max = Math.floor(max);

    for (let i = 0; i <= qtd; i++){
    let n = Math.floor(Math.random() * (max - min + 1)) + min;
    numerosAleatorios.push(n);
    }
};

//gerar e imprimir
getRandomIntInclusive(minStr, maxStr, qtdStr);
console.log(`Os números aleatórios são: [${numerosAleatorios.join(' ')}]`);
// Atividade 1
/*let indice =  13
let soma = 0


for (let k = 0; k < indice; k = k + 1) {
    soma = soma + k
    console.log(soma)
    
}*/

// Atividade 2

/*let numeros = [0, 1];

for (let i = 2; i < 100; i++) {
    let NumeroNovo = numeros[i - 1] + numeros[i - 2];
    numeros.push(NumeroNovo);
}

console.log(numeros);*/


// Atividade 3
// const faturamentoDiario = [
//     1500, 2000, 0, 3000, 2500, 0, 0, 1800, 2100, 0, 
//     1700, 0, 2300, 2600, 2200, 0, 2000, 2100, 0, 1900, 
//     2200, 2300, 2400, 0, 0, 2200, 2100, 0, 2500, 2700
// ];

// function maiorFaturamento(faturamento){
//     return Math.max(...faturamento.filter(valor => valor > 0))
// }


// function menorFaturamento(faturamento){
//     return Math.min(...faturamento.filter(valor => valor > 0))
// }

// function calcularMediaMensal(faturamento) {
//     const diasComFaturamento = faturamento.filter(val => val > 0);
//     const totalFaturamento = diasComFaturamento.reduce((acc, val) => acc + val, 0);
//     return totalFaturamento / diasComFaturamento.length;
// }

// function contarDiasAcimaMedia(faturamento, media) {
//     return faturamento.filter(val => val > media).length;
// }


// const menorValor = calcularMenorValor(faturamentoDiario);
// const maiorValor = calcularMaiorValor(faturamentoDiario);
// const mediaMensal = calcularMediaMensal(faturamentoDiario);
// const diasAcimaMedia = contarDiasAcimaMedia(faturamentoDiario, mediaMensal);

// console.log(`Menor valor de faturamento ocorrido em um dia: ${menorValor}`);
// console.log(`Maior valor de faturamento ocorrido em um dia: ${maiorValor}`);
// console.log(`Número de dias com faturamento superior à média mensal: ${diasAcimaMedia}`);


// Atividade 4
// const faturamentoPorEstado = {
// SP: 67836.43,
//  RJ: 36678.66,
//  MG: 29229.88,
// ES: 27165.48,
// Outros: 19849.53
// };


// const valores = Object.values(faturamentoPorEstado);
// let totalFaturamento = 0;

// for (let valor of valores) {
//     totalFaturamento += valor;
// }


// console.log('Percentual de representação de cada estado no faturamento mensal:');
// for (let estado in faturamentoPorEstado) {
//     let valor = faturamentoPorEstado[estado];
//  let percentual = (valor / totalFaturamento) * 100;
//     console.log(`${estado}: ${percentual.toFixed(2)}%`);
// }


// Atividade 5
// function inverterNomes(nome){
//     let nomeInvertido = "";
//     for(let i = nome.length - 1; i >= 0;  i--){
        
//         nomeInvertido += nome[i];
//     }



//     return nomeInvertido;
// }

// console.log(inverterNomes("bruno"))
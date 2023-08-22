// tem o indice  0  1  2  3  4  5  6  7  8
const numeros = [1258, 2123, 3451, 4231, 54125, 612312, 7412421, 85125, 912]; //console.log(numeros[0]); (retorna 1258)
// const [primeiroNumero, segundoNumero, ...resto] = numeros; // dessa forma foi atribuido facilmente.
//console.log(primeiroNumero, segundoNumero); //aqui ele retorna o numero de indice 0 e indice 1
//console.log(resto); // com o ...(variavel) ele retorna o resto da variavel
//-------------------------------------------------------
//Para pular valores coloca-se da seguinte forma com um vazio.
//const [um, , dois, tres, , cinco] = numeros;
// console.log(um, dois, cinco)
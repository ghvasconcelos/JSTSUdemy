// Padrão JS Para contas IEEE 754-2008

let num1 = 5; //number
let num2 = 2.5; //number
//Ambos são do tipo number então é possivel fazer a conta mais facilmente
//console.log(num1 + num2);

//console.log(num1.toString + num2);
//nesse caso teria a concatenação que daria (52.5)

//num1.toString ( converte o numero para uma string, e não altera a variavel num1, apenas temporariamente faz ele se comportar como uma string) 
//poderia usar o console.log(typeof num1) para verificar que ainda é um numero
 // para alterar a variavel para string poderia ser usado o exemplo
//  num1 =num1.toString;

//Para colocar como binario, poderia usar o exemplo 
// console.log(num1.toString(2));

// console.log(num1.toFixed(2));
//nesse exemplo usando o toFixed(Quantas casas decimais), eu consigo arredondar o numero para a quantidade de casa decimais escolhidas

// console.log(Number.isInteger(num1)); 
//( Dessa forma consigo verificar se o numero é inteiro ou não)

let temp = num1 * 'Ola';
//console.log(Number.isNaN(temp));
//Desse metodo verifica se é um Numero ou não.



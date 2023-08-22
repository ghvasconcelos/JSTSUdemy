const pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Vasconcelos',
    idade: 22,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    } 
};

//atribuição via desestruturação
const {nome, sobrenome} = pessoa;
//const (endereco: {rua, numero}) = pessoa
console.log(nome, sobrenome);
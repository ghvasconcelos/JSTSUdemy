/*
-> Hora entre 0-11 -> Bom dia
-> Hora entre 12-17 ->Boa tarde
-> Hora entre 18-23 -> Boa noite
*/
//IF PODE SER USADO SOZINHO
//Sempre que utilizo o Else é necessario um IF antes
//Else if pode ser infinito, quantos necessarios
// So posso ter um Else na checagem ( o ultimo )

const hora = 12;

if (hora >= 0 && hora <= 11) {
    console.log('Bom Dia')
}
else if (hora >= 12 && hora <=17){
    console.log('Boa tarde.')
}
else if (hora >= 18 && hora <=23){
    console.log('Boa noite')
}
else {
    console.log('Ola')
}

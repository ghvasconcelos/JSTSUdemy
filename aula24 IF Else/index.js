/*
-> Hora entre 0-11 -> Bom dia
-> Hora entre 12-18 ->Boa tarde
-> Hora entre 18-0 -> Boa noite
*/

const hora = 15;

if (hora <= 11) {
    console.log('Bom Dia')
}
else if (hora <=18){
    console.log('Boa tarde.')
}
else if (hora <=23){
    console.log('Boa noite')
}
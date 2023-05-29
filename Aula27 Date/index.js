//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// Com Number = const data = new Date(2023, 4, 23); // Ano, Mes, Dia, Hora, Minuto, Segundo, MiliSegundos
// Com string const data = new Date('2019-04-20 20:20:59');
//console.log(data.toString());

const data = new Date('2003-01-14 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto;

if (diaSemana === 0){
    diaSemanaTexto = 'Domingo';
} else if(diaSemana === 1) {
    diaSemanaTexto = 'Segunda';
} else if(diaSemana === 2) {
    diaSemanaTexto = 'Terça';
} else if(diaSemana === 3) {
    diaSemanaTexto = 'Quarta';
} else if(diaSemana === 4) {
    diaSemanaTexto = 'Quinta';
} else if(diaSemana === 5) {
    diaSemanaTexto = 'Sexta';
} else if(diaSemana === 6) {
    diaSemanaTexto = 'Sabado';
}

console.log (diaSemanaTexto);
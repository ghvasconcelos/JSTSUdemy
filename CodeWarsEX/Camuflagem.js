function camuflarString(input) {
    const tamanhoVisivel = 4;
    const tamanhoTotal = input.length;

    if (tamanhoTotal <= tamanhoVisivel) {
        return input
    }

    const parteVisivel = input.substring(tamanhoTotal - tamanhoVisivel);
    const parteCamuflada = '#'.repeat(tamanhoTotal - tamanhoVisivel);

    return parteCamuflada + parteVisivel;
}

const userInput = "teste";
const camuflado = camuflarString(userInput);
console.log(camuflado);


function calcularMDC(a, b) {
    if (b === 0) {
        return a;
    } else {
        return calcularMDC(b, a % b);
    }
}


function calcularMMC(a, b) {
    return (a * b) / calcularMDC(a, b);
}


let numero1 = 2;
let numero2 = 3;
let mmc = calcularMMC(numero1, numero2);
console.log("O MMC de", numero1, "e", numero2, "é:", mmc);

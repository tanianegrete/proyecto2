function calculadora(tipoOperacion, numero1, numero2) {
    var resultado;
    if (tipoOperacion == "suma") {
        resultado = numero1 + numero2;

    }
    if (tipoOperacion == "resta") {
        resultado = numero - numero2;

    }
    if (tipoOperacion == "multiplicacion") {
        resultado = numero1 * numero2;

    }
    if (tipoOperacion == "divicion") {
        resultado = numero1 / numero2;
    }
    return resultado;


}
var resultado = calculadora("suma", 6, 4);
console.log(resultado);
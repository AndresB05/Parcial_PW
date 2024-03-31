function sumarCuadros(arrayNumeros) {

    let suma = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        const numero = arrayNumeros[i];
        suma += arrayNumeros[i];

        let separador ="";
        const string1 = numero.toString();
        for (let i = 0; i < string1.length; i++) {
            separador += "-";
        }
        console.log("+ " + separador + " +");
        console.log("| " + numero + " |");
        console.log("+ " + separador + " +");

    }
    let separadorsuma ="";
        const string2 = suma.toString();
        for (let i = 0; i < string2.length; i++) {
            separadorsuma += "=";
        }
        console.log("+ " + separadorsuma + " +");
        console.log("| " + suma + " |");
        console.log("+ " + separadorsuma + " +");


    return suma;
    
}
const arrayNumeros = [1,23,453,3267,12354, 123456];
const resultado = sumarCuadros(arrayNumeros);

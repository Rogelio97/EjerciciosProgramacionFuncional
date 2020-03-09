console.log("Ejercicio #4")
console.log("Determine el mayor de 4 enteros.")

var numeros = [2,56,32,5];
var mayor = 0;
 
for(i = 0; i < numeros.length; i++){
    if (numeros[i] > mayor)
    {
        mayor = numeros[i];
    }
}
console.log(numeros) 
console.log("El numero mayor ingresado es ") + console.log(mayor);
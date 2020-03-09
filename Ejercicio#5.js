console.log("Ejercicio #5")
console.log("Calcula la suma de una lista (arreglo) de elementos.")
//Definimos la variable donde se almacena el resultado
var result=0;
//Ingresamos los datos en el arreglo
let arreglo=[ 12,2,3,6,8,13,19 ];

for (let i =0; i<arreglo.length;i++){
 //Hacemos la suma de los valores
 result +=arreglo[i];
    
}
console.log("Los numeros ingresados fueron ") + console.log(arreglo)
console.log("La suma de los numeros es de:")
console.log(result);

console.log("Ejercicio #8")
console.log("Dadas dos listas, determine si son iguales. Devolver verdadeo o falso.")


let lis1=[1,2,3,4,5,5,7]
let lis2=[1,2,3,4,5,6,7]
var i=0

var comparador1,comparador2=true

do{
    if(lis1[i]==lis2[i]){
        comparador1 = true
    }else{
        comparador2=false
    }
    i++
}while(i<lis1.length || i<lis2.length)
var op= comparador2 && comparador2
console.log("Los valores de la listas son \n" + lis1 + "\n"  + lis2)
console.log(op)


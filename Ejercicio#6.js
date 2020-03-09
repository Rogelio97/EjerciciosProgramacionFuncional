console.log("Ejercicio #6")
console.log("Determina si un elemento dado está contenido en una lista. Devuelve verdadero o falso.")

let lista=["Rogelio", "22Años", "Estudiante"]
BuscarElemento("Valladolid")
function BuscarElemento(buscar){
    //EL indexOf nos sirve para poder encontrar una variable
    //EN este caso compara si esta el valor. si esta devuelve "true"
    if (lista.indexOf(buscar)>-1) {
        console.log("El valor " + buscar + " Se encuentra en la lista")
        console.log(true)
    //En caso contrario devuelve "False"    
    }else if(lista.indexOf(buscar)==-1){
        console.log("El valor " + buscar + " No se encuentra en la lista")
        console.log(false)
    }  
}



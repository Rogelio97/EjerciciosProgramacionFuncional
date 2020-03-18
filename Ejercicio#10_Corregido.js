console.log("Ejercicio # 10 Realizar una funcion que reciba una lista"
+"y devuelva empleando recursividad otra lista de los elementos pares " )

let list=[1,2,3,4,5,6,7,8,9,10,11,12] //recibimiento de la lista

let listpar=[] //aqui se almacena la listaq de numeros pares

function impar (numero){
    if (numero==0)
        return false

    else
        return par(numero-1)
}

function par(numero){
    if (numero==0)
        return true
    else
        return impar(numero-1) 
}

for (let i=0; i<list.length; i++)
{
    if (par(list[i])==true)    
{

listpar[i]=list[i]
}
}
var contador=0

do
{ 
    if (listpar[0]==undefined)
    {
        listpar.splice(0,1)
    }

    if (listpar[contador]==undefined)
    {
        listpar.splice(contador,1)
    }
    console.log(listpar[contador])
    contador++

}
while(contador<listpar.length)
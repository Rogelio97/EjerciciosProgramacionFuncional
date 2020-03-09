console.log("Ejercicio #7")
console.log("Determina si dada una lista, ésta se encuentra ordenada. Se debe devolver verdadero o falso.")

let l =[1,2];
var op;
var flag1,flag2=true;
var aux=true;

var i=0

do{
    if(l[i]<l[i+1])
    {
       
        flag1=true;
    
    }else{

        
        flag2=false;

    }

console.log(l[i])

i++

}

while(i<l.length-1)
op=flag1 && flag2

console.log(op)
var result=0;
function sucesion(n)

{

   

    if(n == 1)  //caso base

    return 1;

 else



    return  2+sucesion(n-1);





}





for(let i=1;i<=10;i++)

{



console.log(sucesion(i))
result +=sucesion(i);
    

}
console.log("------")
console.log("La suma de los valores ingresados es de ") + console.log(result)

  
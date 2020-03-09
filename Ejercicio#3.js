console.log("Ejercicio #3")
console.log("Dado un número entero en segundos, determinar la cantidad de horas, minutos y segundos que contiene.")

function secondsToString(segundos){
    var hour = Math.floor (segundos/3600)
    //Anteponiendo un 0 a los segundos minutos y horas si son menos de 10
    hour =(hour <10)? '0' + hour:hour;
    var minutos = Math.floor((segundos/60)%60);
    minutos = (minutos<10)? '0' + minutos:minutos;
    var segundos = segundos %60;
    segundos = (segundos<10)? '0' + segundos : segundos;

    return  hour + ' hora ' + minutos + ' minutos ' + segundos + ' segundos ';
}

var segunds = 4926;
console.log("Los segundos ingresados fueron de " + segunds + " Segundos")
console.log("El tiempo transcurrido es de " + secondsToString(segunds));

var letDni = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E",];

//FORMA 1 , sacar la letra correspondiente

var numDni= Number(prompt("ingresa el numero de tu Dni"))
var restante = numDni % 23  //------> sacamos el restante del numero ingresado en el prompt
var resultado = letDni[restante]

function identid(){
    document.write( numDni + resultado)
    };

identid();

// FORMA 2 para obtener la letra

var numDni = Number(prompt("ingresar numero de Dni"))

var resto = numDni % 23     //------> sacamos el restante del numero ingresado en el prompt

var entrar = Object.values(letDni); //------> tomamos los valores del array y usamos el numero arrojado del resto
                                            // con object.values identificamos la posicion correspondiente del array

var result = entrar[resto];

console.log('tu Dni es: ' + numDni + result);



//FORMA para hallar la letra correspondiente

function letraDni(dni) {
    return "TRWAGMYFPDXBNJZSQVHLCKE".charAt(dni % 23); //------> nos muestra la posicion del string, tomando el resto del numero de DNI
}

console.log(letraDni(49867826));
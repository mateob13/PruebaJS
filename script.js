// // // Crear un array llamado meses y que almacene el nombre de los doce meses del año.
// // // Mostrar por pantalla los doce nombres utilizando la función console.log().

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

for (var i = 0; i <= meses.length; i++) {
    console.log(meses[i]);
}

// // // Completar las condiciones de los if del siguiente script para que los mensajes se
// // // muestren siempre de forma correcta:

var numero1 = 5;
var numero2 = 8;

if(numero1 < numero2) {
    console.log("numero1 no es mayor que numero2");
}

if(numero2 > 0) {
    console.log("numero2 es positivo");
}

if(numero1 < 0 || numero1 != 0) {
    console.log("numero1 es negativo o distinto de cero");
}

if(numero2 > 0) {
    console.log("numero2 es positivo");
}

if(++numero1 <= numero2) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}


// // // Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función
// // // Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los
// // // lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en
// // // un array el número de apariciones de dicha suma, repitiendo 36.000 veces esta
// // // operación.

//Este ejercicio se encuentra en la pagina dados.html que esta en esta misma carpeta
alert("Bienvenido a nuestro restaurante la delicia sac");
var entrada = parseInt(prompt("Ingrese el valor de la entrada: "));
var segundo = parseInt(prompt("Ingrese el valor del segundo: "));
var postre = parseInt(prompt("Ingrese el valor del postre: "));
alert("Presiones F12 para ver su cuenta");
// MOSTRAR LOS PRECIOS
console.log("Entrada: "+entrada);
console.log("Segundo: "+segundo);
console.log("Postre: "+postre);
// SUMA
var suma = entrada + segundo + postre;
console.log("Monto neto: "+suma);
// IGV
var igv = suma * 0.18;
console.log("IGV: ",igv);
// MONTO TOTAL
var total = suma + igv;
console.log("TOTAL A PAGAR: ",total);
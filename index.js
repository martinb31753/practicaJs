// funcion sin parametros
/*
function iniciarSesion (){
    
    const USUARIO = prompt("ingrese su usuario")
    const PASWORD = prompt("ingrese su contraseña")
    
    if( USUARIO == "ADMIN" && PASWORD =="123456"){
       alert("bIENVENIDO" + USUARIO)    
    }else{
        alert("Usuario o contraseña incorrecto")
    }
}

iniciarSesion()
*/
// funciones con parametro
/*
function sumarDosNumeros(numeroUno, numeroDos){

      const SUMA = numeroUno + numeroDos

      alert("la suma es "+ SUMA)

}

const NUMERO_UNO = parseFloat (prompt("ingrese el primer numero"))
const NUMERO_DOS = parseFloat(prompt("ingrese el segundo numero"))

sumarDosNumeros(NUMERO_UNO, NUMERO_DOS) 

*/
/*

FUNCIONES CON PARAMETROS APLICANDO RETURN

function sumarDosNumeros(numeroUno, numeroDos){

    const SUMA = numeroUno + numeroDos
    return SUMA
    
}

function mostrarResultado (resultado){
    alert("El resultado es"+ resultado)
}

const NUMERO_UNO = parseFloat (prompt("ingrese el primer numero"))
const NUMERO_DOS = parseFloat(prompt("ingrese el segundo numero"))

let resultadoSuma = sumarDosNumeros(NUMERO_UNO, NUMERO_DOS) 

 mostrarResultado (resultadoSuma)*/
/*
 ESCOPE
 let nombre = "John Doe" // variable global

 function saludar(){
    let nombre = "Juan" // variable local
    alert (nombre)
 }
 
 saludar()
*/

//FUNCIONES ANONIMAS
// Se debe asignar la funcion a una constante
 /*
const suma = function (valorUno, valorDos){
    let resultado = valorUno + valorDos
    return resultado
}
 console.log(suma(5,6)) //activo o ejecuto la funcion */

 // FUNCIONES FLECHA
/*
 const suma = (valorUno, valorDos) => {
    let resultado = valorUno + valorDos
    return resultado
}*/
 
// simplificar la funcion flecha o arrow function no requiere el return ya que lo hace implicitamente

/*const suma = (valorUno , valorDos) => valorUno + valorDos

const numeroUno = parseFloat (prompt("ingrese el primer numero"))
const numeroDos = parseFloat(prompt("ingrese el segundo numero"))

let resultadoSuma = suma (numeroUno , numeroDos)

console.log (resultadoSuma)*/

//OBJETOS
/*
const persona = {
    nombre: "Martin",
    apellido:"Botta",
    edad:"37",
}
console.log (persona)
console.log ("nombre de persona " + persona.nombre) // acceder a alguna propiedad del objeto
console.log ("apellido de persona " + persona.apellido)*/

//FUNCION CONSTRUCTORA
/*
function persona (nombre, apellido, edad){

    this.nombre = nombre
    this.apellido= apellido
    this.edad = edad
}

const personaUno = new persona("Martin","Botta", "37")
const personaDos = new persona("John","Doe","33")
const personaTres = new persona("Mario","Iriarte","95")
console.log(personaUno)
console.log(personaDos)
console.log(personaTres)// console.log es solo para poder verlo en consola

*/

//METODOS( son las acciones que puede realizar un objeto) //los metodos estar relacionados a un objeto.

// crear un metodo
/*
function persona (nombre, apellido, edad){// verificar porque no funciona

    this.nombre = nombre
    this.apellido= apellido
    this.edad = edad
    this.saludar = function (){
        console.log("Hola mi nombre es "+ this.nombre)
    }
}

let personaUno = persona()

personaUno.saludar()
*/

//CLASES - SON SIMILARES A FUNCIONES CONSTRUCTORAS- ES MAS MODERNO QUE UNA FUNCION CONSTRUCTORA ACTUALMENTE SE UTILIZAN CLASES
/*
class persona {
    constructor(nombre, apellido, edad) {

        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    
    }


let nombre = "Martin"
let apellido ="Botta"
let edad ="37"

const martin = new persona (nombre,apellido,edad)

console.log(martin)
*/

//ARRAYS - ES UN TIPO DE DATOS QUE SIRVE PARA ALMACENAR VALORES EN FORMA DE LISTA (pueden ser, numeros, stringd, booleanos, objetos)
//tienen un indice que va desde el 0
/*
let arrayVacio = []
let arrayPalabras = [martin.telefono.laptop]
ley arrayBooleano =[]*/

// ACCEDER A LOS ELEMENTOS DE UN ARRAY
/*
let arrayPaises = ["Aregentina","Colombia","Brasil","Mexico"];

console.log (arrayPaises[2])*/

// ACCEDER A TODOS LOS ELEMENTOS

/*
let arrayPaises = ["Aregentina","Colombia","Brasil","Mexico"];

for (let index = 0; index < arrayPaises.length; index ++){
    console.log ("indice: "+ index + ":" + arrayPaises[index])
}

*/

//AGREGAR UN NUEVO ELEMENTO AL FINAL DEL ARRAY-METODO PUSH
/*

let arrayPaises = ["Aregentina","Colombia","Brasil","Mexico"];

nombre="Usa"

//arrayPaises.push(nombre)// AGREGAR AL FINAL
//arrayPaises.unshift(nombre)// SE AGREGA AL PRINCIPIO

console.log(arrayPaises)
*/
//================ ELIMINAR ELEMENTO DE UN ARRAY ================

//pop->Elimina elemento al final del array
// arrayNombres.pop();
// console.log(arrayNombres);

//shift->Elimina elemento al inicio del array
// arrayNombres.shift();
// console.log(arrayNombres);

//================ ELIMINAR ELEMENTOS DE UN ARRAY ================
// let arrayProductos = ["Laptop", "PC", "Celular"];

//Primer parámetro el indice a partir del cual se va a eliminar,
//el segundo es cuantos elementos se van a eliminar

// arrayProductos.splice(0, 2);
// console.log("Nueva lista:");
// console.log(nuevaLista);

//================ CONCATENAR TODOS LOS ELEMENTOS DE UN ARRAY ================
// let arrayProductos = ["Laptop", "PC", "Celular"];

// let arrayConcatenado = arrayProductos.join("-")
// console.log(arrayConcatenado)

//================ CONCATENAR DOS ARRAYS ================
// let arrayProductos = ["Laptop", "PC", "Celular"];
// let arrayProductosDos = ["iPhone", "iPad", "Samsung s22"];

// let arrayCombinado = arrayProductos.concat(arrayProductosDos);

// console.log(arrayCombinado)

//================ COPIAR UNA PARTE DEL ARRAY ================
//Primer parámetro el indice a partir del cual se va a comenzar,
//a copiar, el segundo es en donde se va a finalizar pero el fin
//no está incluido

// let arrayProductos = ["Laptop", "PC", "Celular"];
// let porcionArray = arrayProductos.slice(1, 2)

//================ CONOCER EL INDEX DE UN ELEMENTO EN EL ARRAY ================

// let arrayProductos = ["Laptop", "PC", "Celular"];

// console.log(arrayProductos.indexOf("Laptop"))
// console.log(arrayProductos.indexOf("Samsung S22"))

//================ CONOCER SI UN ELEMENTO EXISTE EN EL ARRAY ================

// let arrayProductos = ["Laptop", "PC", "Celular"];

// console.log(arrayProductos.includes("Laptop"))
// console.log(arrayProductos.includes("Samsung S22"))

//================ INVIERTE UN ARRAY ================

// let arrayProductos = ["Laptop", "PC", "Celular"];

// //Reverse es destructivo, modifica el array original
// console.log(arrayProductos.reverse())

//================ FOR OF ================
// let arrayProductos = ["Laptop", "PC", "Celular"];
// for (const producto of arrayProductos) {
//   console.log(producto);
// }

//================ ELIMINAR UN ELEMENTO ESPECIFICO DE UN ARRAY ================
//================ ELIMINAR ELEMENTO DE UN ARRAY ================

//pop->Elimina elemento al final del array
// arrayNombres.pop();
// console.log(arrayNombres);

//shift->Elimina elemento al inicio del array
// arrayNombres.shift();
// console.log(arrayNombres);

//================ ELIMINAR ELEMENTOS DE UN ARRAY ================
// let arrayProductos = ["Laptop", "PC", "Celular"];

//Primer parámetro el indice a partir del cual se va a eliminar,
//el segundo es cuantos elementos se van a eliminar

// arrayProductos.splice(0, 2);
// console.log("Nueva lista:");
// console.log(nuevaLista);

//================ CONCATENAR TODOS LOS ELEMENTOS DE UN ARRAY ================
// let arrayProductos = ["Laptop", "PC", "Celular"];

// let arrayConcatenado = arrayProductos.join("-")
// console.log(arrayConcatenado)

//================ CONCATENAR DOS ARRAYS ================
// let arrayProductos = ["Laptop", "PC", "Celular"];
// let arrayProductosDos = ["iPhone", "iPad", "Samsung s22"];

// let arrayCombinado = arrayProductos.concat(arrayProductosDos);

// console.log(arrayCombinado)

//================ COPIAR UNA PARTE DEL ARRAY ================
//Primer parámetro el indice a partir del cual se va a comenzar,
//a copiar, el segundo es en donde se va a finalizar pero el fin
//no está incluido

// let arrayProductos = ["Laptop", "PC", "Celular"];
// let porcionArray = arrayProductos.slice(1, 2)

//================ CONOCER EL INDEX DE UN ELEMENTO EN EL ARRAY ================

// let arrayProductos = ["Laptop", "PC", "Celular"];

// console.log(arrayProductos.indexOf("Laptop"))
// console.log(arrayProductos.indexOf("Samsung S22"))

//================ CONOCER SI UN ELEMENTO EXISTE EN EL ARRAY ================

// let arrayProductos = ["Laptop", "PC", "Celular"];

// console.log(arrayProductos.includes("Laptop"))
// console.log(arrayProductos.includes("Samsung S22"))

//================ INVIERTE UN ARRAY ================

// let arrayProductos = ["Laptop", "PC", "Celular"];

// //Reverse es destructivo, modifica el array original
// console.log(arrayProductos.reverse())

//================ FOR OF ================
// let arrayProductos = ["Laptop", "PC", "Celular"];
// for (const producto of arrayProductos) {
//   console.log(producto);
// }

//================ ELIMINAR UN ELEMENTO ESPECIFICO DE UN ARRAY ================
/*
const nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];

function eliminarElemento(nombre) {
  let index = nombres.indexOf(nombre);
  if (index != -1) {
    nombres.splice(index, 1);
  }
}

let valorAEliminar = prompt("Ingrese un nombre");
eliminarElemento(valorAEliminar);
console.log(nombres);
*/

//================ EJEMPLO COMPLETO ================
/*
class Producto {
    constructor(nombre, precioCompra, precioVenta, cantidad) {
      this.nombre = nombre.toUpperCase();
      this.precioCompra = precioCompra;
      this.precioVenta = precioVenta;
      this.cantidad = cantidad;
    }
    calcularCosto = () => this.cantidad * this.precioCompra;
  }
  
  function agregarProductos() {
    let numeroProductos = parseInt(
      prompt("Cuantos productos necesita registrar")
    );
    let productos = [];
    for (let index = 0; index < numeroProductos; index++) {
      let nombre = prompt("Ingrese el nombre");
      let precioCompra = prompt("Ingrese el precio de compra");
      let precioVenta = prompt("Ingrese el precio de venta");
      let cantidad = prompt("Ingrese la cantidad");
      let productoARegistrar = new Producto(
        nombre,
        precioCompra,
        precioVenta,
        cantidad
      );
      productos.push(productoARegistrar);
    }
    return productos;
  }
  
  function mostrarProductos(productos) {
    for (const producto of productos) {
      console.log(producto);
      console.log(producto.nombre);
    }
  }
  
  function calcularCosto(productos) {
    let sumatoriaCosto = 0;
    for (const producto of productos) {
      sumatoriaCosto += producto.calcularCosto();
    }
    return sumatoriaCosto;
  }
  
  function main() {
    let productos = agregarProductos();
    mostrarProductos(productos);
    let costoAlmacen = calcularCosto(productos);
    alert("El costo total del almacén es: " + costoAlmacen);
  }
  
  main();
  */
  /*
  Footer
  © 2022 GitHub, Inc.
  Footer navigation
  Terms
  Privacy
  Security
  Status
  Docs
  Contact GitHub
  Pricing
  API
  Training
  Blog
  About
  */

  //-----------------------FUNCIONES DE ORDEN SUPERIOR----------------------
/*
  function mayorQueUnNumero(numero){

    return (numeroAComparar) => numeroAComparar > numero ;
    
  }

  let mayorQueDiez = mayorQueUnNumero(10)

  console.log(mayorQueDiez(20))
  console.log(mayorQueDiez(7))*/
/*
  const numeros = [1,2,3,4];

  function porCadaUno(array, funcionAEjecutar){
    for(let elemento of array)
    funcionAEjecutar(elemento)
  }

  function imprimir (valor){
    alert(valor)

  }
  porCadaUno(numeros,imprimir)
  */

  //---------------------FOR EACH----------------------
  /*
 let arrayPAises = ["Argentina","Colombia","Mexico"]

 arrayPAises.forEach((elemento)=> alert(elemento))*/



 //---------------------MAP------------------------------
/*
 let arrayProductos = [
  {nombre:"remera" , precio:1000},
  {nombre:"camisa", precio:1200},
  {nombre:"zapatillas", precio:2000},
 ];

 let nuevoArray = arrayProductos.map((elemento) =>({
  nombre: elemento.nombre,
  precio: elemento.precio * 1.2,

 }));

 console.log(arrayProductos)
 console.log(nuevoArray)*/

 //---------------REDUCE----------------- EJ.SUMAR VALOR TOTAL DEL ARRAY
/*
 let arrayProductos = [
  {nombre:"remera" , precio:1000},
  {nombre:"camisa", precio:1200},
  {nombre:"zapatillas", precio:2000},
 ];

 let precioTotal = arrayProductos.reduce(
  (acumulador,elemento) => acumulador + elemento.precio, 
  0
  );

  console.log (precioTotal)*/




  
  
  //------------------------------DOM----------------------------------


//console.log (document.body) accedemos al html en este caso al body


//OBTENER ELEMENTO POR ID
/*
let divUno = document.getElementById("subtitulo")

console.log(divUno)

let parrafoUno = document.getElementById("parrafo1")

console.log(parrafoUno)*/




//OBTENER POR CLASES

/*
let tituloUno = document.getElementsByClassName ("titulo")

console.log (tituloUno)*/



//OBTENER ELEMENTOS POR TAG NAME
/*

 let listaItems =document.getElementsByTagName("li")

 console.log (listaItems)

 for( const elemento of listaItems){
  console.log(elemento)
 }
*/

//OBTENER ELEMENTO CON QUERY SELECTOR ...selector mas especifico
/*
let parrafo = document.querySelector("#container h3")

console.log (parrafo)
*/

// AGREGAR TEXTO MEDIANTE JAVASCRIPT
/*
let parrafo = document.getElementById ("subtitulo")

console.log (parrafo.innerText)

parrafo.innerText ="Hola este es un parrafo modificado desde js"
console.log(parrafo.innerText)*/



//Modificar el inner html mediante javascript
/*

let contenedor = document.getElementById("subtitulo")

contenedor.innerHTML="<h2> Hola !!!!!!!!</h2>"


*/

// AGREGAR CLASES CSS MEDIANTE JAVASCRIPT
/*
let contenedor = document.getElementById("subtitulo")

contenedor.className ="bg-red"*/

//-------------------EVENTOS----------------------
/*let botonUno = document.getElementById("btn")

botonUno.addEventListener ("click", () =>{
  alert("Se oprimio boton uno")
 
})*/

/*
let botonUno = document.getElementById("btn")

botonUno.onclick = () => {
  alert("se oprimio boton")
}
*/
// -------------------------------LOCAL STORAGE"
//guardar informacion.
/*
let variableAlmacenar = "TOKEN_SEGURO"

localStorage.setItem ("token_ls",variableAlmacenar)

//extraer info


let textoAlmacenado = localStorage.getItem("token_ls")
 console.log(textoAlmacenado)
*/
/*
let variableAlmacenar = "TOKEN_SEGURO"

sessionStorage.setItem ("token_ss",variableAlmacenar)
*/
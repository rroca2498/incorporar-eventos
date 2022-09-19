// let total = 0;

// let cantidad = 1;

// let precio = 0;

// let operacion = 1 // se va a usar el 1 como verdadero y el 0 para salir de la operacion

// function elegirProducto(item){

//    item = prompt("Que repuesto es el que elige \n 1-Bujia \n 2-Manija \n 3-Cremallera \n 4-Pata");

//    switch(item){

//     case "1":
//         precio = 910;
//         break;

//     case "bujia":
//         precio = 910;
//         break;

//     case "Bujia":
//         precio= 910;
//         break;

//     case "2":
//         precio = 3800;
//         break;
//     case "manija":
//         precio = 3800;
//         break;

//     case "Manija":
//         precio= 3800;
//         break;

//     case "3":
//         precio = 1010;
//         break;

//     case "cremallera":
//         precio = 1010;
//         break;

//     case "Cremallera":
//         precio= 1010;
//         break;
    
//     case "4":
//         precio = 4840;
//         break;

//     case "pata":
//         precio = 4840;
//         break;

//     case "Pata":
//         precio= 4840;
//         break;
//    }

// }


// function elegirCantidad(numero){


//     cantidad = parseInt(prompt("Cuantas unidades necesita del repuesto?"));
// }

// function validarOperacion(sigue){

//     operacion = parseInt(prompt("Quiere seleccionar un articulo? \n Apretar 1 para elegir \n Apretar 0 para salir"));
// }
// while (operacion !== 0){
    
//     validarOperacion();

//     if (operacion == 1){
        
//         elegirProducto();
//         elegirCantidad();

//          total = total + precio * cantidad;

//         console.log("La cuenta que hace el programa es " + precio + " x " + cantidad + "= " + precio*cantidad);
    

//     }

    

//     alert("Usted en el carrito tiene un total de " + total);
// }

// De aca para abajo es la que se agrega para el desafio

// const articulos=[];

// let contadorArticulo = 0;

// function  Articulo (descripcion, precio, stock){
    
    
//     this.Descripcion = descripcion;
//     this.precio= parseInt(precio);
//     this.stock= stock;

   
// }

// const sku1 = new Articulo("Bujia K4M Megane",910,64);

// function ArticuloNuevo(sku){
//     return articulos.push(sku);
// }

// ArticuloNuevo(sku1);

// const sku2 = new Articulo("Manija interior Logan", 3800, 8);

// ArticuloNuevo(sku2);


// const sku3 = new Articulo("Kit cremallera embrague R21", 1010, 3);

// ArticuloNuevo(sku3);

// const sku4 = new Articulo("Pata caja R19", 4840, 15);

// ArticuloNuevo(sku4);

// console.log(articulos);

// console.log(articulos);

// // let validar = parseInt(prompt("Elija que producto quiere agregar al carrito seleccionando el numero correspondiente (sellecionar 0 para salir)\n 1- Bujia \n 2- Manija interior Logan\n 3- Kit cremallera embrague R21 \n 4- Pata caja"));

// const carrito = [];

// // function sumarAlCarrito(x){
// //     return carrito.push(x);
// // }

// // while (validar !== 0){
    
    

// //     let agregarCarrito = articulos.find(el =>{
// //          return el.sku === validar});
 
// //     console.log(agregarCarrito);

// //     const cantidad = prompt("Cuantas unidades quiere comprar del repuesto")

// //     const precioTotal = agregarCarrito.precio * cantidad;

// //     // console.log(precioTotal);

// //     agregarCarrito.precio = precioTotal;

// //     // console.log(agregarCarrito.precio);  fui dejando estos log para poder ir viendo si funcionaba todo lo que hacia

// //     // console.log(agregarCarrito);

// //     sumarAlCarrito(agregarCarrito);

// //     console.log(carrito); // en el carrito se va formando el array con los productos y en el precio figura el total segun la cantidad seleccionada por el usuario

//     const cargaDeMonto = document.getElementById('productosEnElCarrito');

// //     let sumaDeMonto = "Usted tiene " + agregarCarrito.descripcion + "x " + cantidad + "= " + agregarCarrito.precio*cantidad ;

// //     // queria hacerlo de este modo pero me tiraba error, en que me estoy equivocando?

// //     // let sumaDeMonto = "Usted tiene $ ${agregarCarrotp.descripcion} $ x $ ${cantidad} $ = $ ${agregarCarrito.precio * cantidad}
// //     // ;

// //     cargaDeMonto.append(sumaDeMonto);

    

// //     validar = parseInt(prompt("Elija que producto quiere agregar al carrito seleccionando el numero correspondiente (sellecionar 0 para salir)\n 1- Bujia \n 2- Manija interior Logan\n 3- Kit cremallera embrague R21 \n 4- Pata caja"));   

// // }

// const contador1= document.querySelector("#cantidad1");

// const suma1 = document.querySelector("#agregar1");



// suma1.addEventListener("click", ()=>
// {
//     cargaDeMonto.append(`Usted tiene ${contador1.value} ${articulos[0].descripcion} = ${articulos[0].precio * contador1.value} `);

   
// });

// const contador2= document.querySelector("#cantidad2");

// const suma2 = document.querySelector("#agregar2");



// suma2.addEventListener("click", ()=>
// {
//     cargaDeMonto.append(`Usted tiene ${contador2.value} ${articulos[1].descripcion} = ${articulos[1].precio * contador2.value} `);

   
// });

// const contador3= document.querySelector("#cantidad3");

// const suma3 = document.querySelector("#agregar3");



// suma3.addEventListener("click", ()=>
// {
//     cargaDeMonto.append(`Usted tiene ${contador3.value} ${articulos[2].descripcion} = ${articulos[2].precio * contador3.value} `);

   
// });

// const contador4= document.querySelector("#cantidad4");

// const suma4 = document.querySelector("#agregar4");



// suma4.addEventListener("click", ()=>
// {
//     cargaDeMonto.append(`Usted tiene ${contador4.value} ${articulos[3].descripcion} = ${articulos[3].precio * contador4.value} `);

   
// });

// // Probe haciendo entre luego de la suma en cada append para ver si hacia el salto de linea cuando creaba el codigo html y no me funcionaba, tambien utilice el \n y tampoco hacia el salto de linea. Que es lo que estoy haciendo mal?

const articulos  = [
    {sku: 1, descripcion: "bujia K4M Megane", precio:910 , rubro: "encendido" , img: "../Imagenes/repuestoMuestra.jpg"},
    {sku: 2, descripcion: "manija interior Logan", precio: 3800, rubro: "accesorios" , img: "../Imagenes/repuestoMuestra.jpg"},
    {sku: 3, descripcion: "kit cremallera embrague R21", precio: 1010, rubro:"accesorios" , img: "../Imagenes/repuestoMuestra.jpg"},
    {sku: 4, descripcion: "pata caja R19", precio: 4840, rubro: "motor" , img: "../Imagenes/repuestoMuestra.jpg"},
    {sku: 5, descripcion: "ruleman delantero SNR", precio: 7500, rubro: "rodamiento", img: "../Imagenes/repuestoMuestra.jpg"},
    {sku: 6, descripcion: "ruleman trasero SKF", precio: 6950, rubro: "rodamiento", img: "../Imagenes/repuestoMuestra.jpg"},
    {sku: 7, descripcion: "bieleta Suran", precio: 2870, rubro: "suspension", img: "../Imagenes/repuestoMuestra.jpg"},
    {sku: 8, descripcion: "amortiguador delantero Duster", precio: 15640, rubro: "suspension", img: "../Imagenes/repuestoMuestra.jpg"},
    {sku: 9, descripcion: "antena universal", precio: 1500, rubro: "accesorios", img: "../Imagenes/repuestoMuestra.jpg"},
    {sku: 10, descripcion: "cables de bujia K7M", precio: 11200, rubro: "encendido", img: "../Imagenes/repuestoMuestra.jpg"}
]
  const encontrado = document.querySelector("#listaProductos");
function imprimir(repuesto){
    let codigo = "";

    for (const item of repuesto){

        codigo= `<div class="col-3 producto text-center">

        <img src="${item.img}" alt="Imagen de ${item.descripcion}">

        <p>${item.descripcion}</p>

        <p class="precio">${item.precio}</p>

        <input type="number" id="cantidad2">

        <button type="submit" id="agregar2">Agregar</button>

    </div>
        
        
        `;

      encontrado.innerHTML += codigo;

    }
}

function busqueda(productos,palabra){

  return productos.filter(el =>
  {
    return el.descripcion.includes(palabra);
  });
}

// imprimir(articulos);

console.log(articulos);

const buscador = document.querySelector("#buscador");

const buscar = document.querySelector("#buscar");

const listaBuscada=[{sku: 1, descripcion: "bujia K4M Megane", precio:910 , rubro: "encendido" , img: "../Imagenes/repuestoMuestra.jpg"}];


imprimir(listaBuscada);
console.log(listaBuscada);

// buscar.addEventListener("click", () =>
// {
//   listaBuscada = articulos.filter( articulos => articulos.descripcion === buscador.value);   probando el filtrado
// })

// console.log(listaBuscada);

buscar.addEventListener("click", ()=>
  {
    encontrado.innerHTML = "";
    let nuevaBusqueda = busqueda(articulos,buscador.value.toLowerCase());
    imprimir(nuevaBusqueda);
    console.log(nuevaBusqueda);
  }
)
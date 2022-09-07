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

const articulos  = [
    {sku: 1, descripcion: "Bujia K4M Megane", precio:910 , rubro: "encendido"},
    {sku: 2, descripcion: "Manija interior Logan", precio: 3800, rubro: "accesorios"},
    {sku: 3, descripcion: "Kit cremallera embrague R21", precio: 1010, rubro:"accesorios"},
    {sku: 4, descripcion: "Pata caja R19", precio: 4840, rubro: "motor"}
]

console.log(articulos);

let validar = parseInt(prompt("Elija que producto quiere agregar al carrito seleccionando el numero correspondiente (sellecionar 0 para salir)\n 1- Bujia \n 2- Manija interior Logan\n 3- Kit cremallera embrague R21 \n 4- Pata caja"));

const carrito = [];

function sumarAlCarrito(x){
    return carrito.push(x);
}




while (validar !== 0){
    
    

    let agregarCarrito = articulos.find(el =>{
         return el.sku === validar});
 
    console.log(agregarCarrito);

    const cantidad = prompt("Cuantas unidades quiere comprar del repuesto")

    const precioTotal = agregarCarrito.precio * cantidad;

    // console.log(precioTotal);

    agregarCarrito.precio = precioTotal;

    // console.log(agregarCarrito.precio);  fui dejando estos log para poder ir viendo si funcionaba todo lo que hacia

    // console.log(agregarCarrito);

    sumarAlCarrito(agregarCarrito);

    console.log(carrito); // en el carrito se va formando el array con los productos y en el precio figura el total segun la cantidad seleccionada por el usuario

    validar = parseInt(prompt("Elija que producto quiere agregar al carrito seleccionando el numero correspondiente (sellecionar 0 para salir)\n 1- Bujia \n 2- Manija interior Logan\n 3- Kit cremallera embrague R21 \n 4- Pata caja"));   

}






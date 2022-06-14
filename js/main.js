// Simulador interactivo

// Array y base de datos

class Productos{
    constructor(id, nombre, precio, stock){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}

const producto = [
    new Productos(1, "Diamante", 1000, 300),
    new Productos(2, "Tamarindo", 5000, 100),
    new Productos(3, "Nordika", 5000, 200),
    new Productos(4, "Black Out", 8000, 100),
]

function agregarProducto(){
    let id = Number(prompt("Ingrese el ID de producto:"))
    let nombre = prompt("Ingrese el nombre del producto:")
    let precio = Number(prompt("Ingrese el precio del producto:"))
    let stock = Number(prompt("Ingrese el stock del producto:"))

    producto.push(new Productos(id, nombre, precio, stock))

}

agregarProducto()

console.log(producto)


// Login + opción de compra

let user = prompt("Ingrese su usuario:")
let password = prompt("Ingrese su contraseña:")


if( (user === "AgustinK") && (password === "Agus1234") ) {

    alert("Bienvenido Agus! Ya puede iniciar su compra.")

    let compra = prompt("Qué desea comprar?")

    let precio

    while (compra.toLowerCase() != "nada") {

        switch (compra.toLowerCase()){

            case "porcelanatos":
                precio = 5000
                alert("El valor del porcelanato es: $" + precio)
                break;
            
            case "ceramicas":
                precio = 3000
                alert("El valor de la cerámica es: $" + precio)
                break;

            case "pegamento":
                precio = 500
                alert("El valor del pegamento es: $" + precio)
                break;
            
            default:
                alert("No contamos con ese producto")
                break;
        }

        compra = prompt("Qué desea comprar?")
        
    } 

}else{

    alert("El usuario o la contraseña son incorrectos.")

}
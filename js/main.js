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

let user = prompt("Ingrese su usuario:")
let password = prompt("Ingrese su contraseña:")

    while( (user !== "AgustinK") && (password !== "Agus1234") ) {

        alert("El usuario o la contraseña son incorrectos.")

        user = prompt("Ingrese su usuario:")
        password = prompt("Ingrese su contraseña:")

        }

        alert("Bienvenido Agus! Ya puede iniciar el proceso.")
    
    let ingreso = prompt("Desea agregar un producto?")
    
    if (ingreso.toLowerCase() !== "no"){
            
            agregarProducto()
    
        }else{

            alert("El Ecommerce cuenta con " + producto.length + " productos")
        
        }

const resultado = producto.find((busqueda) => busqueda.nombre === prompt("Qué producto desea consultar?"))

const liquidacion = producto.filter((busqueda) => busqueda.stock >= 200)

console.log(resultado)
console.log(liquidacion)
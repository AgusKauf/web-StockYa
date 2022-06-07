// Simulador interactivo

let user = prompt("Ingrese su usuario:")
let password = prompt("Ingrese su contraseña:")


if( (user === "AgustinK") && (password === "Agus1234") ) {

    alert("Bienvenido Agus! Ya puede iniciar su compra.")

    let compra = prompt("Qué desea comprar?")

    let precio

    while (compra.toLowerCase() != "nada") {

        switch (compra.toLowerCase()){

            case "porcelanatos":
                precio = 1500
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
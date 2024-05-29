function saludo() {
    var nombre = prompt("Por favor, ingresa tu nombre:");
    if (nombre) {
        alert("¡Bienvenido, " + nombre + "!"+ "  ¡¡ Le enviaremos noticias !!");
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
}

// Variables
var topping;
var precio;
var precioFinal;
var helado = 50; 

topping = "Oreo"; 


if (topping === "Oreo") {
    precio = 10;
} else if (topping === "KitKat") {
    precio = 15;
} else if (topping === "Kinder") {
    precio = 25;
} else {
    precio = 0;
    console.log("No tenemos este topping");
}


precioFinal = helado + precio;


console.log("El helado cuesta $" + precioFinal);

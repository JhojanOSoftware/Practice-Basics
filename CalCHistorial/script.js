let numeroslist = [];
function agregar() {
    if (numeroslist.length>= 5){
        document.getElementById("mensaje").innerText = "Solo puedes agregar 5 numeros";
        document.getElementById("mensaje").style.color = "red";
        document.getElementById("agregar").style.display = "none";
        return;
    }
    const numero = parseFloat(document.getElementById("Numero").value);
    if (!isNaN(numero)) {
        numeroslist.push(numero);
        const item =document.createElement("li");
        item.innerText= numero;
        document.getElementById("historial").appendChild(item);
        let restantes = 5 - numeroslist.length;
        document.getElementById('mensaje').innerText = `Quedan ${restantes} números por agregar`;
        if (numeroslist.length>= 5){
            document.getElementById("agregar").style.display = "none";
        }
    } else {
        document.getElementById("mensaje").innerText = "Por favor, ingresa un número válido";
        document.getElementById("mensaje").style.color = "red";
    }
}
function calcular() {
    if (numeroslist.length === 0){     
        return 0;
    }
    let suma = numeroslist.reduce((acc,numero) => acc+numero,0);
    let maxenlst = Math.max(...numeroslist);
    let mienlist =Math.min(...numeroslist);
    let promedio = suma / numeroslist.length;
    document.getElementById("resultado").innerHTML =  `Promedio: ${promedio.toFixed(2)} | Máximo: ${maxenlst} | Mínimo: ${mienlist}`;
}
function limpiar() {
    numeroslist = [];
    document.getElementById("historial").innerHTML = '';
    document.getElementById("Numero").value = '';
    document.getElementById("resultado").innerText = '';
    document.getElementById("mensaje").innerText= 'Puedes agregar hasta 5 números';
    document.getElementById('mensaje').style.color = 'black';
    document.getElementById("agregar").style.display = 'inline';


}
     





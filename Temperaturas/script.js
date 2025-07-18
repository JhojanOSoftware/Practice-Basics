

function convertir() {
    let tempsuser = document.getElementById("numero").value;
    let choice = document.getElementById("tipo").value;
    if (tempsuser.length === 0){
        document.getElementById('mensaje').innerText = 'Por favor, ingresa un número.';
        document.getElementById('mensaje').style.color = 'red';
        return 0;
    }
    if (!isNaN(tempsuser) ) {
        tempsuser = parseFloat(tempsuser);
        let resultado = '';
        let celsius = 0;
        document.getElementById('mensaje').innerText = '';
        if (choice === 'Celsius') {
            celsius = tempsuser;
            let faren = (tempsuser * (9/5))  +32 ;
            resultado = `${tempsuser} °C es igual a ${faren.toFixed(2)} °F`;
        } else if (choice === 'Fahrenheit') {
            celsius = (tempsuser -32 ) * (5/9);
            resultado = `${tempsuser} °F es igual a ${celsius.toFixed(2)} °C`;
        } else {    
            resultado = 'Por favor, selecciona una opción válida.';
        }
        document.getElementById('resultado').innerText = resultado;
    }

    let mensaje = '';

    if (celsius  <= 10 ){
        mensaje = '¡Hace frío!';

    } else if (celsius > 10 && celsius <= 30){
        mensaje = '¡El clima es agradable!';
    }
    else if (celsius > 30){
        mensaje = '¡Hace calor!';
    }
    document.getElementById('mensaje').innerText = mensaje;
}
function limpiar() {
    numeroslist = [];
    document.getElementById("numero").value = '';
    document.getElementById("resultado").innerText = '';
    document.getElementById('mensaje').style.color = 'black';
    document.getElementById("agregar").style.display = 'inline';


}
     





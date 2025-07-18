

function convertir() {
    let tempsuser = document.getElementById("numero").value;
    let choice = document.getElementById("tipo").value;
    let celsius = 0;
    let resultado = '';
    let mensaje = '';
    tempsuser = tempsuser.replace(',', '.'); 



    if (tempsuser.length === 0){
        document.getElementById('mensaje').innerText = 'Por favor, ingresa un número.';
        document.getElementById('mensaje').style.color = 'red';
        return 0;
    }
    if (tempsuser.length === 0 || !isNaN(tempsuser) ) {
        tempsuser = parseFloat(tempsuser);
        document.getElementById('mensaje').innerText = '';
        if (choice === 'Celsius') {
            celsius =tempsuser;
            let faren = (tempsuser * (9/5))  +32 ;
            resultado = `${tempsuser} °C es igual a ${faren.toFixed(2)} °F`;
        } else if (choice === 'Fahrenheit') {
            celsius = (tempsuser -32 ) * (5/9);
            resultado = `${tempsuser} °F es igual a ${celsius.toFixed(2)} °C`;
         
        } else if (choice === 'Kelvin') {
            celsius = tempsuser - 273.15;
            resultado = `${tempsuser} K es igual a ${celsius.toFixed(2)} °C`;
        } else {
            resultado = 'Por favor, selecciona una opción válida.';
        }
        document.getElementById('resultado').innerText = resultado;
    }


    if (celsius  <= 10 ){
        mensaje = '¡Hace frío!🧊';
        document.getElementById('mensaje').style.color = 'blue';

    } else if (celsius > 10 && celsius <= 30){
        mensaje = '¡El clima es agradable!🌤️';
        document.getElementById('mensaje').style.color = 'green';

    }
    else if (celsius > 30){
        mensaje = '¡Hace calor🔥!';
        document.getElementById('mensaje').style.color = 'red';

    }
    document.getElementById('mensaje').innerText = mensaje;
    const intentoslistas = document.createElement("li");
    intentoslistas.innerText = `Temperatura agregada fue :${resultado}: ${mensaje}`;
    document.getElementById("historial").appendChild(intentoslistas);
}
function limpiar() {

    document.getElementById("numero").value = '';
    document.getElementById("resultado").innerText = '';
    document.getElementById('mensaje').style.color = 'black';
    document.getElementById('mensaje').innerText = '';
    document.getElementById('resultado').innerText = '';


}
     





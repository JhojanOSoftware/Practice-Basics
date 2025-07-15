let tempsuser = document.getElementById("numero").value;
let choice = document.getElementById("tipo").value;
function calcular() {
    if (tempsuser.length === 0){
        return 0;
    }
    if (!isNaN(tempsuser) && tempsuser !== '') {
        tempsuser = parseFloat(tempsuser);
        let resultado = '';
        if (choice === 'Celsius') {
            let faren = (tempsuser * (9/5))  +32 ;
            resultado = `${tempsuser} °C es igual a ${faren.toFixed(2)} °F`; ### falta parte de la conversion
        }

}
function limpiar() {
    numeroslist = [];
    document.getElementById("numero").value = '';
    document.getElementById("resultado").innerText = '';
    document.getElementById("mensaje").innerText= 'Puedes agregar hasta 5 números';
    document.getElementById('mensaje').style.color = 'black';
    document.getElementById("agregar").style.display = 'inline';


}
     





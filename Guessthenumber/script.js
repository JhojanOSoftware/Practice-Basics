let random = Math.floor(Math.random() * 5) + 1;
let intentos = 0;
let juegoterminado = false;
function verificar(){
    if (juegoterminado) return;
    const guess  = parseInt(document.getElementById("guess").value);
    let result = '';
    if (!isNaN(guess) && guess >=1 && guess <=10) {
        if (guess < random){
            result= "Too low, Try Again";
             document.getElementById("result").style.color = "red";
             intentos++;
             perder(guess);

        }else if (guess > random){
            result = "Too high, Try Again";
            document.getElementById("result").style.color = "red";
            intentos++;
            perder(guess);
        }else { 
            result = "You got it buddy!";
            document.getElementById("reiniciar").style.display = "inline";
                        document.getElementById("result").style.color = "green";
            juegoterminado = true;

        }
    const intentoslistas = document.createElement("li");
    intentoslistas.innerText = `Intento ${intentos}: ${result}`;
    document.getElementById("historial").appendChild(intentoslistas);
    }else { 
        result = "Please enter a valid number";
                    document.getElementById("result").style.color = "red";

    }
    document.getElementById("result").innerText = result;
    document.getElementById("intentos").innerText = "Intentos: " + intentos;

}

function perder(guess){
    if (intentos >= 2 && guess != random) {
        document.getElementById("final").style.color = "red";
    document.getElementById("final").innerText = `You lost buddy, the number was ${random}`;
    document.getElementById("guess").disabled = true;
    document.getElementById("reiniciar").style.display = "inline";
    juegoterminado = true;
}}

function reiniciar(){
    random = Math.floor(Math.random()*10 )+1;
    document.getElementById("guess").value ='';
    document.getElementById("result").innerText='';
    document.getElementById("guess").disabled = false;
    document.getElementById("reiniciar").style.display = "none";
    intentos = 0;
    document.getElementById("intentos").innerText = "Intentos: 0";
    document.getElementById("historial").innerHTML = '';
    juegoterminado = false;
}
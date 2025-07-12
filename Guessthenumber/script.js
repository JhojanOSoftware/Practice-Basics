let random = Math.floor(Math.random() * 5) + 1;
function verificar(){
    const guess  = parseInt(document.getElementById("guess").value);
    let result = '';
    if (guess< random){
        result= "Too low, Try Again";
    }else if (guess > random){
        result = "Too high, Try Again";
    }else { 
        result = "You got it buddy!";
        document.getElementById("reiniciar").style.display = "inline";
    }
    document.getElementById("result").innerText = result;
}
function reiniciar(){
    random = Math.floor(Math.random()*10 )+1;
    document.getElementById("guess").value ='';
    document.getElementById("result").innerText='';
    document.getElementById("guess").disabled = false;
    document.getElementById("reiniciar").style.display = "none";
}
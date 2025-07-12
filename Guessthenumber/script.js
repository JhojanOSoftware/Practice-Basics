let random = Math.floor(Math.random() * 5) + 1;
function verificar(){
    const guess  = (document.getElementById("guess").value);
    let result = '';
    if (!isNaN(guess) && guess >=1 && guess <=10) {
        if (guess< random){
            result= "Too low, Try Again";
        }else if (guess > random){
            result = "Too high, Try Again";
        }else { 
            result = "You got it buddy!";
            document.getElementById("reiniciar").style.display = "inline";
        }
    }else { 
        result = "Please enter a valid number";
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
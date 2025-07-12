function calcularIMC(){
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    let  resultado = "";

    if (peso > 0 && altura > 0){
        const imc =peso /(altura*altura);

        if (imc < 18.5) {
            resultado = "Bajo de Peso, Cuidate mucho";}
        else if (imc >18.5 && imc < 24.99) {
            resultado = "Peso Normal, Sigue así";}
        else if  (imc > 25 && imc < 30){
            resultado = "Sobrepeso, Cuidado con tu salud";}
        else if (imc > 30){
            resultado = "Obesidad, Es importante que busques ayuda profesional";}

    document.getElementById("resultado").innerText = `Tu IMC es ${imc.toFixed(2)} - ${resultado}`
        } 
        else{
            document.getElementById("resultado").innerText ="Ingresa Datos validos"
        }

}
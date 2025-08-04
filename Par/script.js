function VerNun(){
    let number = prompt("Ingresa un numero")
    if (number === null || number.trim() === "") {
        alert("No has ingresado un numero valido");
        return null;
    }
    if ( !isNaN( number )){
        return  parseInt(number); 
    } else  {
        alert("El valor ingresado no es un numero");
        return null;
    }
}

function NanPar(number){
       if (number >=0 ){
            if (number % 2 === 0 ) {
            alert("El numero es par");
            }else{
           alert("El numero es impar");
           }

             }
    else {
        alert("El numero no es valido");
    }
}

function Prim(number){
     if (number <= 1 ){
        alert("El numero no es primo");
        return;
     }
    let Primo = true;
    for (let  i =2 ; i< number; i++){
        if ( number  % i === 0 ){
            Primo = false;
            break;
        
    }
}
  if (Primo){
    alert("El numero  primo");
  }
  else {
    alert("El numero no es primo");
  }
}

function OutCome() {
    let numero = VerNun();
    if (numero !== null) {
        NanPar(numero);
        Prim(numero);
    }
}
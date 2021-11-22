function verificarNumero(){

  var inNumero = document.getElementById("inNumero");
  var outNumero = document.getElementById("outNumero");

  var numero = Number(inNumero.value);

  if(numero % 2 == 0){
    outNumero.textContent = "O número " + numero + " é par";
  }else{
    outNumero.textContent = "O número " + numero + " é ímpar";
  }
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarNumero);
//Programa que verifica se um número é perfeito. A soma dos divisores do número é igual a ele mesmo.

function verificarPerfeito(){

  var inNumero = document.getElementById("inNumero").value;
  var outDivisores = document.getElementById("outDivisores");
  var outPerfeito = document.getElementById("outPerfeito");  

  var numero = Number(inNumero);
  var divisores = [];
  var somaDivisores = 0;

  for(var i = 1; i < numero; i++){    
    if(Number.isInteger(numero / i)){
      divisores.push(i); 
      somaDivisores += i;
    }    
  }

  outDivisores.innerHTML = `Os divisores de ${numero} são: ${divisores}. <br> A soma dos divisores é: ${somaDivisores}.`;
  
  if(somaDivisores == numero){
    outPerfeito.innerHTML = `O número ${numero} é perfeito`;
  }else{
    outPerfeito.innerHTML = `O número ${numero} não é perfeito`;
  }

}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarPerfeito);
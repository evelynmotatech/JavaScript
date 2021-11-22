//Programa que verifica se o condutor terá que pagar multa. Possibilidades: sem multa, multa leve e multa grave.

function verificarMulta() {

  var inVelPermitida = document.getElementById("inVelPermitida").value;
  var inVelCondutor = document.getElementById("inVelCondutor").value;
  var outMulta = document.getElementById("outMulta");

  var velCondutor = Number(inVelCondutor);
  var velPermitida = Number(inVelPermitida);
  var velMultaLeve = velPermitida * 1.2; 

  if( (velCondutor > velPermitida) && (velCondutor < velMultaLeve) ){
    outMulta.textContent = "Multa Leve";
  }
  if(velCondutor > velMultaLeve){    
    outMulta.textContent = "Multa Grave";
  }
  if (velCondutor < velPermitida){
    outMulta.textContent = "Sem Multa";
  }
}

btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarMulta);
//Programa para um parquímetro.
// valor do parquimetro R$1.00 - 30min  || valor do parquimetro R$1.75 - 60min || valor do parquimetro R$3.00 - 120min

function verificarParquimetro() {

  var inValorPago = document.getElementById("inValorPago");   
  var valorPago = Number(inValorPago.value);
  let troco30min = (valorPago - 1.00).toFixed(2);
  let troco60min = (valorPago - 1.75).toFixed(2);
  let troco120min = (valorPago - 3.00).toFixed(2);
    
  var outTempo = document.getElementById("outTempo");
  var outTroco = document.getElementById("outTroco");
  
  if((valorPago == '') || (valorPago == 0) || (valorPago == null) || (valorPago < 1.00) || isNaN(valorPago)) {
    outTempo.innerHTML = "Valor mínimo do parquímetro R$1.00 e máximo R$3.00";
    outTroco.innerHTML = "";
    inValorPago.focus();
    return
  }

  if(valorPago >= 1 && valorPago < 1.75){
    outTempo.innerHTML = "Tempo: 30min";
    outTroco.innerHTML = `Troco: ${troco30min};`
  }else if(valorPago >= 1.75 && valorPago < 3){
    outTempo.innerHTML = "Tempo: 60min";
    outTroco.innerHTML = `Troco: ${troco60min};`
  }else if(valorPago >= 3){
    outTempo.innerHTML = "Tempo: 120min";
    outTroco.innerHTML = `Troco: ${troco120min}`;
  }
}

btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarParquimetro);
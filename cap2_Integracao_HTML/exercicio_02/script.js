//Programa para uma lan house. O valor deve ser calculado a cada 15min e tempos fracionados são contabilizados como 15 min.

function mostrarValor() {

  var inPreco = document.getElementById("inPreco");
  var inTempo = document.getElementById("inTempo");
  var outValor = document.getElementById("outValor");
  
  var preco = Number(inPreco.value);
  var qtd = Number(inTempo.value);
  var qtdTempo = Math.ceil(qtd / 15);
  var aPagar = (preco * qtdTempo).toFixed(2);

  outValor.innerHTML = "O valor a pagar é: R$" + aPagar;
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarValor);
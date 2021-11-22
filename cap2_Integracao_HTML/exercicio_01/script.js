//Programa que leia a descrição e o preço de um medicamento e informe o valor do produto na promoção.

function mostrarPromocao() {

  var medicamento = document.getElementById("inMedicamento").value;
  var inPreco = document.getElementById("inPreco");
  var inQtd = document.getElementById("inQtd");
  var outPromocao = document.getElementById("outPromocao");
  
  var preco = Number(inPreco.value);
  var qtd = Number(inQtd.value);
  var desconto = Math.trunc(preco * qtd).toFixed(2);

  outMedicamento.innerHTML = "Promoção de " + medicamento;
  outPromocao.innerHTML = "Leve " + qtd + " por R$" + desconto + ".";
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarPromocao);
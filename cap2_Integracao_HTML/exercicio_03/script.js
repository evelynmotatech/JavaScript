//Supermercado em promoção
// Oferecer 50% de desconto em um item na compra de 3 unidades do produto.

function mostrarPromocao(){

  var inProduto = document.getElementById("inProduto");  
  var inPreco = document.getElementById("inPreco");
  var outProduto = document.getElementById("outProduto");
  var outPromocao = document.getElementById("outPromocao");
  var outValor = document.getElementById("outValor");

  var produto = inProduto.value;  
  var preco = Number(inPreco.value);
  var promocao = ((preco * 2) + (preco * 0.5)).toFixed(2);
  var valorPromo = (preco * 0.5).toFixed(2);

  outProduto.innerHTML = produto;
  outPromocao.innerHTML = "Promoção. Leve 3 por R$" + promocao;
  outValor.innerHTML = "O 3º item custará apenas R$" + valorPromo;
  
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarPromocao);mostrarPromocao
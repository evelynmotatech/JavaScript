//Programa que leia um o preço de um produto e informe as opções de pagamento da loja. Calcular e ingirma o valor do pagamento para pagmento à vista com 10% de desconto e valor em 3x sem juros.

valor_produto = parseFloat(prompt("Digite o valor do produto: "));
valor_avista = (valor_produto - (valor_produto * 0.1)).toFixed(2);
valor_3x = (valor_produto / 3).toFixed(2);

alert("O valor do produto é: R$" + valor_produto +". Seu preço às vista e com desconto é R$" +valor_avista +". Seu preço em 3x é de R$" +valor_3x);
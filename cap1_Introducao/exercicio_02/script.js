//Elaborar um programa que leia o valor total de hma conta e quatos clientes irão pagar a conta. Calcular e mostrar o valor a ser pago por cada cliente.

valor_conta = parseFloat(prompt("Digite o valor da conta: "));
qnt_cliente = parseInt(prompt("Digite a quantidade de clientes: "));
valor_cliente = (valor_conta / qnt_cliente).toFixed(2);

alert("O valor total da conta foi: R$" + valor_conta +". O valor dividido por " + qnt_cliente + " clientes é: R$" + valor_cliente);
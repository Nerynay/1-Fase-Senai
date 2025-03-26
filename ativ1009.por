//Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). 
//Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

programa {
  funcao inicio() {
  cadeia vendedor
  real salarioFixo, valorTotalVendas, comissao, totalRecebido

  escreva("digite o nome do vendedor: ") 
  leia(vendedor) 

  escreva("digite o salario fixo: ")
  leia(salarioFixo)

  escreva("digite o valor total das vendas R$: ")
  leia(valorTotalVendas)

  comissao = valorTotalVendas * 0.15
  valorTotalVendas = salarioFixo + comissao

  escreva(" o valor total das vendas é: R$", valorTotalVendas)


  }
}

//Leia 2 valores de ponto flutuante de dupla precisão A e B, que correspondem a 2 notas de um aluno. A seguir, calcule a média do aluno, 
//sabendo que a nota A tem peso 3.5 e a nota B tem peso 7.5 (A soma dos pesos portanto é 11). 
//Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

programa {
  funcao inicio() {

  real nota1, nota2, media

  escreva("nota 1: ")
  leia(nota1)

  escreva("nota 2: ")
  leia(nota2)

  media = (nota1 * 3.7 + nota2 * 7.5) / 11

  escreva("a media é: " + media)

  }
}

const campo = document.getElementById("calculo");

const simbolos = ["+", "-", "/", "*", "**"];

function adicionarValor(valor) {
  const valorAtual = campo.value;

  // permitir apenas que o primeiro valor seja número
  if (valorAtual == "" && simbolos.includes(valor)) {
    return;
  }

  // não permitir simbolos seguidos
  // https://horadecodar.com.br/2021/11/05/como-pegar-o-ultimo-caractere-de-uma-string-em-javascript/
  const ultimoCaracter = valorAtual.slice(-1);
  if (simbolos.includes(ultimoCaracter) && simbolos.includes(valor)) {
    return;
  }

  campo.value = `${valorAtual}${valor}`;
}

function limpar() {
  campo.value = "";
}

function calcular() {
  const valorAtual = campo.value;
  campo.value = eval(valorAtual);
}

/**
 * Ao clicar nos botões, adicionar o seu valor ao campo de calculo
 * Ex:
 * - Valor atual do campo é "2+", chamo a função adicionarValor('5')
 * - O valor do campo vai se tornar "2+5"
 *
 * ----
 *
 * Ao clicar no botão calcular, vou pegar o valor atual do input e somar ele
 * com a função eval('2+5') do javascript
 *
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/eval
 */

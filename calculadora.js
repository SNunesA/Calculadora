// pega o conteudo do input
const campo = document.getElementById("calculo");

/**
 * Estrutura do historico
 * {
 *   tipo: "alterar" ou "limpar" ou "calcular",
 *   valorFinal: string
 * }
 */
const historico = [];

const operadores = ["+", "-", "/", "*", "**"];

function adicionarValor(valorAdicionar) {
  let valorAtual = campo.value;

  // permitir apenas que o primeiro valor seja número
  if (valorAtual == "" && operadores.includes(valorAdicionar)) {
    return;
  }
  // pega o ultimo caracter atraves do slice -1
  const ultimoCaracter = valorAtual.slice(-1);

  // não permitir operadores seguidos
  if (
    operadores.includes(ultimoCaracter) &&
    operadores.includes(valorAdicionar)
  ) {
    return;
  }

  // não permitir que o primeiro caracter seja ponto
  if (ultimoCaracter === "" && valorAdicionar === ".") {
    return;
  }

  // permitir pontos apenas após números
  if (operadores.includes(ultimoCaracter) && valorAdicionar === ".") {
    return;
  }

  // não permitir pontos seguidos
  if (ultimoCaracter === "." && valorAdicionar === ".") {
    return;
  }

  // se a ultima ação do histórico for "calcular", substitui o valor do campo por valorAdicionar
  const ultimoItemHistorico = historico[historico.length - 1];
  if (ultimoItemHistorico && ultimoItemHistorico.tipo === "calcular") {
    // e que o valor digitado não seja operador
    if (operadores.includes(valorAdicionar) === false) {
      valorAtual = "";
    }
  }
  // concatena
  const novoValor = `${valorAtual}${valorAdicionar}`;
  // joga o valor novo no input
  campo.value = novoValor;

  historico.push({
    tipo: "alterar",
    valorFinal: novoValor,
  });
}

function limpar() {
  campo.value = "";
  historico.push({
    tipo: "limpar",
    valorFinal: "",
  });
}

function calcular() {
  let valorAtual = campo.value;
  const ultimoCaracter = valorAtual.slice(-1);

  // se o ultimo caracter for um operador, remove ele do calculo
  if (operadores.includes(ultimoCaracter)) {
    valorAtual = valorAtual.slice(0, -1);
  }

  const resultado = eval(valorAtual);
  campo.value = resultado;
  historico.push({
    tipo: "calcular",
    valorFinal: resultado,
  });
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

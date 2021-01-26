let operador1, operador2, operacao, estado;
let disp;


// funcao pra resetar
function reset() {
  operador1 = "0"
  operador2 = "0"
  operacao = null
  estado = "1"
  disp.value = '0'
}
// inicio da funcao pra pegar o valor
function btnClick(objeto) {
  let me = objeto.value;

  if(me == 'C') {
    reset();
    return;
  }
  // Configurando resultado
  if(me == '=') {
    let res;
    switch (operacao) {
      case '+':
        res = parseFloat(operador1) + parseFloat(operador2);
        break
      case '-':
        res = parseFloat(operador1) - parseFloat(operador2);

        break
      case '*':
        res = parseFloat(operador1) * parseFloat(operador2);

        break
      case '/':
        res = parseFloat(operador1) / parseFloat(operador2);

        break
    }
    disp.value = res.toString();
    estado = 1;
    return;
  }


  if((me == '+') || (me == '-') || (me == '*') || (me == '/')) {
    operacao = me;
    estado = 2;
    return;
  }

  if((me == '.') || (me >= '0') && (me <= '9')) {
    if(estado == 1) {
      operador1 += me;
      disp.value = parseFloat(operador1).toString();
    } else if (estado == 2) {
      operador2 += me;
      disp.value = parseFloat(operador2).toString();
    }
  }
}

function inicializar_pagina() {
  disp = document.getElementById('display');
  reset();
}

inicializar_pagina()
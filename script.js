var segundos = 0;
var minutos = 0;
var horas = 0;

function iniciarCronometro() {
  cronometro = setInterval(function () {
    segundos++;

    if (segundos == 60) {
      segundos = 0;
      minutos++;
    }

    if (minutos == 60) {
      minutos = 0;
      horas++;
    }

    exibirCronometro();
  }, 1000); // 1000ms = 1 segundo
}

function pararCronometro() {
  clearInterval(cronometro);
}

function zerarCronometro() {
  segundos = 0;
  minutos = 0;
  horas = 0;
  exibirCronometro();
}

function exibirCronometro() {
  var cronometroElement = document.getElementById("cronometro");
  cronometroElement.innerHTML =
    (horas ? (horas > 9 ? horas : "0" + horas) : "00") +
    ":" +
    (minutos ? (minutos > 9 ? minutos : "0" + minutos) : "00") +
    ":" +
    (segundos > 9 ? segundos : "0" + segundos);
}
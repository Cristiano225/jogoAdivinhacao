//variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screen1.classList.contains('hide')) {
    handleResetClick;
  }
});

//funções
function handleTryClick(event) {
  event.preventDefault(); //não faça o padrão do form que é envia-lo

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    togleScreen();
    screen2.querySelector(
      "h2"
    ).innerText = `acertou em ${xAttempts} tentativas`;
  }

  inputNumber.value = "";
  xAttempts++;
}

function handleResetClick() {
  togleScreen();
  xAttempts = 1;
  let randomNumber = Math.round(Math.random() * 10);
}

function togleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

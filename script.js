let num = Math.floor(Math.random() * 100);

function randomNum() {
  return num;
}

function attempt() {
  let guess = Number(window.prompt("Qual é o seu palpite?"));
  let res = document.getElementById("res");
  if (guess === num) {
    res.innerHTML = `<strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${num}!`;
  } else if (guess > num) {
    res.innerHTML = `Você falou ${guess}. Meu número é <strong>MENOR!!</strong>`;
  } else {
    res.innerHTML = `Você falou ${guess} Meu número é <strong>MAIOR!</strong>`;
  }
}

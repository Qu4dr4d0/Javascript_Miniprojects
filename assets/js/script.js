// PREVIOUS & NEXT BUTTONs
const btnAvancar = document.getElementById("btn__next");
const btnVoltar = document.getElementById("btn__previous");
const cartoes = document.querySelectorAll(".section");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selected");
  cartaoSelecionado.classList.remove("selected");
}

function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add("selected");
}

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});

// NAME CHANGER
const result__0 = document.getElementById("result__0");

const btn__0 = (document.getElementById("btn__0").onclick = function () {
  let name__0 = document.getElementById("name__0").value;

  name__0 == ""
    ? (result__0.innerHTML = "Please, put your name in the field..")
    : (result__0.innerHTML = `- "Haha, no one can hide me, your name is: <span class='yellow'>${name__0} !</span>"`);
});

// RULE OF 3
let resultRuleOf3 = document.getElementById("resultRuleOf3");
let sectionRuleOf3 = document.getElementById("sectionRuleOf3");

sectionRuleOf3.addEventListener("input", () => {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let n3 = Number(document.getElementById("n3").value);

  let x = (n2 * n3) / n1;

  resultRuleOf3.innerHTML = `<span class='yellow'>${x.toFixed(1)}</span>`;
});

// COUNTER
const result__counter = document.getElementById("result__counter");
let counter = 0;

const btn__add = (document.getElementById("btn__add").onclick = function () {
  counter++;
  result__counter.innerHTML = counter;
});
const btn__reset = (document.getElementById("btn__reset").onclick =
  function () {
    counter = 0;
    result__counter.innerHTML = counter;
  });
const btn__sub = (document.getElementById("btn__sub").onclick = function () {
  counter--;
  result__counter.innerHTML = counter;
});

// DICE THROWING
let btn__dice = (document.getElementById("btn__dice").onclick = function () {
  let img__dice = document.getElementById("img__dice");
  let random__0 = Math.floor(Math.random() * 6) + 1;

  switch (random__0) {
    case 1:
      img__dice.src =
        "https://opengameart.org/sites/default/files/side_1_pip.png";
      break;
    case 2:
      img__dice.src =
        "https://opengameart.org/sites/default/files/side_2_pips.png";
      break;
    case 3:
      img__dice.src =
        "https://opengameart.org/sites/default/files/side_3_pips.png";
      break;
    case 4:
      img__dice.src =
        "https://opengameart.org/sites/default/files/side_4_pips.png";
      break;
    case 5:
      img__dice.src =
        "https://opengameart.org/sites/default/files/side_5_pips.png";
      break;
    case 6:
      img__dice.src =
        "https://opengameart.org/sites/default/files/side_6_pips.png";
      break;
  }
});

// YES OR OF COURSE!
let btn__yes = document.getElementById("btn__yes");
let btn__no = document.getElementById("btn__no");
let result__yesNo = document.getElementById("result__yes-no");
let yesNo__container = document.getElementById("yesNo__container");

let width__yesNo = yesNo__container.offsetWidth;
let height__yesNo = yesNo__container.offsetHeight;

btn__yes.onmouseover = function () {
  result__yesNo.style.visibility = "visible";
};

btn__yes.onclick = function () {
  result__yesNo.innerHTML = `&#128146; &#129333;&#8205;&#9794;&#65039; &#x1F470;&#x200D;&#x2640;&#xFE0F;`;
};

btn__yes.onmouseout = function () {
  result__yesNo.style.visibility = "hidden";
  result__yesNo.innerHTML = `&#128141; &#10068;`;
};

btn__no.onmouseover = function () {
  btn__no.style.position = "absolute";
  btn__no.style.left = Math.floor(Math.random() * width__yesNo) + "px";
  btn__no.style.top = Math.floor(Math.random() * height__yesNo) + "px";
};

btn__no.onclick = function () {
  btn__no.style.position = "absolute";
  btn__no.style.left = Math.floor(Math.random() * width__yesNo) + "px";
  btn__no.style.top = Math.floor(Math.random() * height__yesNo) + "px";
};

// LIGHT
let lamp = document.getElementById("lamp");
let txt__lamp = document.getElementById("txt__lamp");

let btn__lampOn = document.getElementById("btn__lampOn");
let btn__lampOff = document.getElementById("btn__lampOff");

btn__lampOn.onclick = function () {
  lamp.src = "assets/imgs/lampOn.png";
  txt__lamp.innerHTML = `Nevermind...`;
};

btn__lampOff.onclick = function () {
  lamp.src = "assets/imgs/lampOff.png";
  txt__lamp.innerHTML = `It's so dark here...`;
};

// EMAIL
let btnEmail = document.getElementById("btnEmail");
let FirstEmail = document.getElementById("FirstEmail");
let extensionEmail = document.getElementById("extensionEmail");

btnEmail.onclick = function () {
  let email__1 = document.getElementById("email__1").value;
  let fEmail = email__1.slice(0, email__1.indexOf("@"));
  let ExEmail = email__1.slice(email__1.indexOf("@"));

  FirstEmail.innerHTML = `Username: <span class='yellow'><br>${fEmail}</span>`;
  extensionEmail.innerHTML = `Extension: <span class='yellow'><br>${ExEmail}</span>`;
};

// GUESS THE NUMBER
let btnGuessNumber = document.getElementById("btnGuessNumber");
let resultGuessNumber = document.getElementById("resultGuessNumber");
let randomGuessNumber;

randomGuessNumber = Math.floor(Math.random() * 100);

btnGuessNumber.onclick = function () {
  let GuessNumber = Number(document.getElementById("guessNumber").value);

  if (GuessNumber > randomGuessNumber && GuessNumber < 101) {
    resultGuessNumber.innerHTML = `My number is <span class='yellow'>lower</span> than ${GuessNumber}!`;
  } else if (GuessNumber < randomGuessNumber && GuessNumber > 0) {
    resultGuessNumber.innerHTML = `My number is <span class='yellow'>highter</span> than ${GuessNumber}`;
  } else if (GuessNumber == randomGuessNumber) {
    resultGuessNumber.innerHTML = `<span class='yellow'>Congrats</span>, you got the right number!`;
    var defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
    };

    function shoot() {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: [""],
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: [""],
      });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  } else {
    resultGuessNumber.innerHTML = `<span class='red'>Choose a number between 1 - 100</span>`;
  }
};
// console.log(randomGuessNumber); // see the random number

// MULTIPLICATION TABLE
let resultMultTable = document.getElementById("resultMultTable");
let sectionMultTable = document.getElementById("sectionMultTable");

sectionMultTable.addEventListener("input", () => {
  let multTable = Number(document.getElementById("multTable").value);
  let i = 1;
  resultMultTable.innerHTML = ``;

  while (i <= 10) {
    resultMultTable.innerHTML += `<span class='yellow'>${multTable} x ${i} = ${
      multTable * i
    }</span><br>`;
    i++;
  }
});

// EVEN OR ODD
let evenOdd = document.getElementById("evenOdd");
let sectionEvenOdd = document.getElementById("sectionEvenOdd");
let resultEvenOdd = document.getElementById("resultEvenOdd");

sectionEvenOdd.addEventListener("input", () => {
  let evenOdd = Number(document.getElementById("evenOdd").value);

  evenOdd % 2 === 0
    ? (resultEvenOdd.innerHTML = `<span class='yellow'>${evenOdd}</span> is <span class='yellow'>EVEN</span>`)
    : (resultEvenOdd.innerHTML = `<span class='yellow'>${evenOdd}</span> is <span class='yellow'>ODD</span>`);
});

// TEMPERATURE CONVERTER

let btnTemperature = document.getElementById("btnTemperature");
let resultTemperature = document.getElementById("resultTemperature");

btnTemperature.onclick = function () {
  let inputTemperature = Number(document.getElementById("inputTemperature").value);
  let celToFah = document.getElementById("celToFah");
  let fahToCel = document.getElementById("fahToCel");

  let celToFahFormula = (inputTemperature * 9 / 5) + 32;
  let fahToCelFormula = (inputTemperature - 32) * 5 / 9;

  if (celToFah.checked) {
    resultTemperature.innerHTML = `<span class='yellow uppercase'>${celToFahFormula.toFixed(1)}°F</span>`;
  } else if (fahToCel.checked) {
    resultTemperature.innerHTML = `<span class='yellow uppercase'>${fahToCelFormula.toFixed(1)}°C</span>`;
  } else {
    resultTemperature.innerHTML = `<span class='red'>Please, enter a number!</span>`
  }



};



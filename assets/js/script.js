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
    : (result__0.innerHTML = `Your name is: ${name__0.toUpperCase()} !`);
});



// CIRCUMFERENCE CALC
const result__1 = document.getElementById("result__1");

const btn__1 = (document.getElementById("btn__1").onclick = function () {
  let radius = document.getElementById("radius").value;
  radius = Number(radius);

  const circumference = 2 * Math.PI * radius;

  result__1.innerHTML = `The value of circumference is: ${circumference.toFixed(
    4
  )}!`;
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
let btn__yes = document.getElementById('btn__yes');
let btn__no = document.getElementById('btn__no');
let result__yesNo = document.getElementById('result__yes-no');
let yesNo__container = document.getElementById('yesNo__container');

let width__yesNo = yesNo__container.offsetWidth;
let height__yesNo = yesNo__container.offsetHeight;

btn__yes.onmouseover = function() {
  result__yesNo.style.visibility = 'visible';
}

btn__yes.onclick = function() {
  result__yesNo.innerHTML = `&#128146; &#129333;&#8205;&#9794;&#65039; &#x1F470;&#x200D;&#x2640;&#xFE0F;`;
}

btn__yes.onmouseout = function() {
  result__yesNo.style.visibility = 'hidden';
  result__yesNo.innerHTML = `&#128141; &#10068;`;
}

btn__no.onmouseover = function() {
  btn__no.style.position = 'absolute';
  btn__no.style.left = Math.floor(Math.random() * width__yesNo) + "px";
  btn__no.style.top = Math.floor(Math.random() * height__yesNo) + "px"; 
}


// LIGHT
let lamp = document.getElementById('lamp');
let btn__lampOn = document.getElementById('btn__lampOn');
let btn__lampOff = document.getElementById('btn__lampOff');


btn__lampOn.onclick = function() {
  lamp.src = 'assets/imgs/lampOn.png'

}

btn__lampOff.onclick = function() {
  lamp.src = 'assets/imgs/lampOff.png'
}


const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btn6 = document.querySelector("#btn6");
const btn5 = document.querySelector("#btn5");
const btn4 = document.querySelector("#btn4");
const btn3 = document.querySelector("#btn3");
const btn2 = document.querySelector("#btn2");
const btn1 = document.querySelector("#btn1");
const btn0 = document.querySelector("#btn0");
const btn00 = document.querySelector("#btn00");
const btnPlus = document.querySelector("#btnPlus");
const btnMinus = document.querySelector("#btnMinus");
const btnMulti = document.querySelector("#btnMulti");
const btnDiv = document.querySelector("#btnDiv");
const equal = document.querySelector("#equal");
const btn7 = document.querySelector("#btn7");
const btndot = document.querySelector("#btndot");
const ac = document.querySelector("#ac");
const del = document.querySelector("#del");

btn7.addEventListener("click", displayInput);
btn6.addEventListener("click", displayInput);
btn5.addEventListener("click", displayInput);
btn4.addEventListener("click", displayInput);
btn3.addEventListener("click", displayInput);
btn2.addEventListener("click", displayInput);
btn1.addEventListener("click", displayInput);
btn8.addEventListener("click", displayInput);
btn9.addEventListener("click", displayInput);
btn0.addEventListener("click", displayInput);
btn00.addEventListener("click", displayInput);
btnPlus.addEventListener("click", displayInput);
btnMinus.addEventListener("click", displayInput);
btnMulti.addEventListener("click", displayInput);
btnDiv.addEventListener("click", displayInput);
btndot.addEventListener("click", displayInput);

const displayText = document.querySelector("#displayText");

function displayInput() {
  let result = this.value;
  displayText.value += result;
}

ac.addEventListener("click", function () {
  displayText.value = "";
});

del.addEventListener("click", function () {
  displayText.value = displayText.value.toString().slice(0, -1);
});

function cal() {
  displayText.value = eval(displayText.value);
}

equal.addEventListener('click',cal);



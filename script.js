"use strict";
let number1 = Number(document.querySelector(".firstValue").value);
let number2 = Number(document.querySelector(".secondValue").value);
document.querySelector(".add").addEventListener("click", function () {
  document.querySelector(".first").textContent = number1 + number2;
  document.querySelector("body").style.backgroundColor = "#ECECEC";
});
document.querySelector(".sub").addEventListener("click", function () {
  document.querySelector(".first").textContent = number1 - number2;
  document.querySelector("body").style.backgroundColor = "#A2A2A2";
});
document.querySelector(".mul").addEventListener("click", function () {
  document.querySelector(".first").textContent = number1 * number2;
  document.querySelector("body").style.backgroundColor = "#FFFFFF";
});
document.querySelector(".div").addEventListener("click", function () {
  let qoutient = number1 / number2;
  let final = qoutient.toFixed(2);
  document.querySelector(".first").textContent = final;
  document.querySelector("body").style.backgroundColor = "#7A7A79";
});

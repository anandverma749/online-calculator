let display = document.getElementById("display-area");
let operands = document.getElementsByClassName("operands");
let poweron = document.getElementById("power-on");
let poweroff = document.getElementById("power-off");
let displayareaoff = document.getElementById("display-area-off");
let equal = document.getElementById("equal");
let equal1 = document.getElementById("equal1");
let showhistory = document.getElementById("show-history");
let hidehistory = document.getElementById("hide-history");
let hist = document.getElementById("hist");
let clear = document.getElementById("clear");
let backspace = document.getElementById("backspace");
let history = document.getElementById("history-container");
let lkeys = Object.keys(localStorage);
let body = document.getElementById("body");

for (let i = 0; i < operands.length; i++) {
  operands[i].addEventListener("click", function () {
    display.innerText += this.innerText;
  });
}

poweron.addEventListener("click", function () {
  poweron.classList.toggle("hide");
  poweroff.classList.toggle("hide");
  displayareaoff.classList.toggle("hide");
  display.classList.toggle("hide");
  equal.classList.add("hide");
  equal1.classList.remove("hide");
  body.classList.remove("background");
});

poweroff.addEventListener("click", function () {
  poweroff.classList.toggle("hide");
  poweron.classList.toggle("hide");
  displayareaoff.classList.toggle("hide");
  display.classList.toggle("hide");
  equal.classList.remove("hide");
  equal1.classList.add("hide");
  display.innerText = "";
  body.classList.add("background");
});

showhistory.addEventListener("click", function () {
  hidehistory.classList.remove("hide");
  showhistory.classList.add("hide");
  history.classList.add("hide");
  hist.classList.add("hide");
});

hidehistory.addEventListener("click", function () {
  showhistory.classList.remove("hide");
  hidehistory.classList.add("hide");
  history.classList.remove("hide");
  hist.classList.remove("hide");
});

clear.addEventListener("click", function () {
  display.innerText = "";
});

backspace.addEventListener("click", function () {
  let a = display.innerText.slice(0, -1);
  display.innerText = a;
});

equal.addEventListener("click", function () {
  let operation = display.innerText;
  display.innerText = eval(display.innerText);
  let key = Date.now();
  localStorage.setItem(key, operation + " = " + display.innerText);
  let temp = document.createElement("div");
  temp.innerHTML = `<div>${localStorage.getItem(key)}</div>`;
  history.insertBefore(temp, history.firstChild);
});

lkeys
  .sort(function (a, b) {
    return a - b;
  })
  .reverse();

if (localStorage.length) {
  for (let i = 0; i < localStorage.length; i++) {
    let temp = document.createElement("div");
    temp.innerHTML = `<div>${localStorage.getItem(lkeys[i])}</div>`;
    history.appendChild(temp);
  }
} else {
  history.classList.add("hide");
}
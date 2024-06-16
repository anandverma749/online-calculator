let display = document.getElementById("display-area");
// let poweron = true;
let operands = document.getElementsByClassName("operands");

for (let i = 0; i < operands.length; i++) {
  operands[i].addEventListener("click", function () {
    display.innerText += this.innerText;
    console.log(this.innerText);
  });
}

document.getElementById("power-on").addEventListener("click", function () {
  document.getElementById("power-on").classList.toggle("hide");
  document.getElementById("power-off").classList.toggle("hide");
  document.getElementById("display-area-off").classList.toggle("hide");
  document.getElementById("display-area").classList.toggle("hide");
  document.getElementById("equal").classList.add("hide");
  document.getElementById("equal1").classList.remove("hide");
});
document.getElementById("power-off").addEventListener("click", function () {
    document.getElementById("power-off").classList.toggle("hide");
    document.getElementById("power-on").classList.toggle("hide");
    document.getElementById("display-area-off").classList.toggle("hide");
    document.getElementById("display-area").classList.toggle("hide");
    document.getElementById("equal").classList.remove("hide");
    document.getElementById("equal1").classList.add("hide");
    display.innerText = "";
  // display.innerText = "0";
});

document.getElementById("show-history").addEventListener("click", function () {
  document.getElementById("hide-history").classList.remove("hide");
  document.getElementById("show-history").classList.add("hide");
  history.classList.add("hide");
  document.getElementById("hist").classList.add("hide");
});
document.getElementById("hide-history").addEventListener("click", function () {
    document.getElementById("show-history").classList.remove("hide");
    document.getElementById("hide-history").classList.add("hide");
    history.classList.remove("hide");
    document.getElementById("hist").classList.remove("hide");
});

document.getElementById("clear").addEventListener("click", function () {
  console.log("clear button clicked.");
  display.innerText = "";
});

document.getElementById("backspace").addEventListener("click", function () {
  console.log("backspace button clicked");
  let a = display.innerText.slice(0, -1);
  display.innerText = a;
});

document.getElementById("equal").addEventListener("click", function () {
  console.log("equal");
  console.log(display.innerText);
  console.log(eval(display.innerText));
  display.innerText = eval(display.innerText);
  let key = Date.now();
  localStorage.setItem(key, display.innerText);
  let temp = document.createElement("div");
    // let temp = `<div>${JSON.parse(localStorage.getItem(lkeys[i]))}</div>`;
    // temp.innertext = `<div>${localStorage.getItem(lkeys[i])}</div>`;
    temp.innerHTML = `<div>${localStorage.getItem(key)}</div>`;
    // console.log(temp);
    history.insertBefore(temp, history.firstChild);
    // history.appendChild(temp);
});

let lkeys = Object.keys(localStorage);

// console.log(lkeys);

lkeys.sort(function (a, b) {
    return a - b;
  }).reverse();

let history = document.getElementById("history-container");

if (localStorage.length) {
  for (let i = 0; i < localStorage.length; i++) {
    let temp = document.createElement("div");
    // let temp = `<div>${JSON.parse(localStorage.getItem(lkeys[i]))}</div>`;
    // temp.innertext = `<div>${localStorage.getItem(lkeys[i])}</div>`;
    temp.innerHTML = `<div>${localStorage.getItem(lkeys[i])}</div>`;
    // console.log(temp);
    history.appendChild(temp);
    // console.log(temp);
    // console.log(localStorage.getItem(lkeys[i]));
  }
} else {
    history.classList.add("hide");
}

let input = document.querySelector("#input");
let clear = document.querySelector("#clear");
let backspace = document.querySelector("#backspace");
let divide = document.querySelector("#divide");
let root = document.querySelector("#root");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let multiply = document.querySelector("#multiply");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let subtract = document.querySelector("#subtract");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let add = document.querySelector("#add");
let zero = document.querySelector("#zero");  
let decimal = document.querySelector("#decimal");
let equals = document.querySelector("#equals");
let history = document.querySelector("#history");
let clearHistory = document.querySelector("#clearHistory");

let exp;
let result;

one.addEventListener("click", function() {
  input.value += "1";    
});
two.addEventListener("click", function() {
  input.value += "2";    
});
three.addEventListener("click", function() {
  input.value += "3";    
});
four.addEventListener("click", function() {
  input.value += "4";    
});
five.addEventListener("click", function() {
  input.value += "5";    
});
six.addEventListener("click", function() {
  input.value += "6";    
});
seven.addEventListener("click", function() {
  input.value += "7";    
});
eight.addEventListener("click", function () {
  input.value += "8";    
});
nine.addEventListener("click", function() {
  input.value += "9";    
});
zero.addEventListener("click", function () {
  input.value += "0";    
});
decimal.addEventListener("click", function () {
  if (!input.value.includes(".")) {
    input.value += ".";
  }
});


clear.addEventListener("click", function () {
  input.value = "";
});
backspace.addEventListener("click", function () {
  if (input.value.includes("sqrt")) {
    input.value = input.value.slice(0, -3);
  }
  input.value = input.value.slice(0, -1);
});
divide.addEventListener("click", function () {  
  if (/[\/\*\+\-]/g.test(input.value)) {
    equal();
    input.value += "/";
  }else input.value += "/";
});
multiply.addEventListener("click", function () {
  if (/[\/\*\+\-]/g.test(input.value)) {
    equal();
    input.value += "*";
  }else input.value += "*";
});
subtract.addEventListener("click", function () {
  if (/[\/\*\+\-]/g.test(input.value)) {
    equal();
    input.value += "-";
  }else input.value += "-";
});
root.addEventListener("click", function () {
  if (/[\/\*\+\-]/g.test(input.value)) {
    equal();
    input.value += "sqrt";
  }else input.value += "sqrt";
});

add.addEventListener("click", function () {
  if (/[\/\*\+\-]/g.test(input.value)) {
    equal();
    input.value += "+";
  }else input.value += "+";
});

function equal() {
  exp = input.value
  if (input.value.includes("/")) {    
    let value = input.value.split("/");
    input.value = +value[0] / +value[1];
  }

  if (input.value.includes("sqrt")) {    
    let value = input.value.slice(4);    
    input.value = Math.sqrt(+value);
  }

  if (input.value.includes("*")) {    
    let value = input.value.split("*");
    input.value = +value[0] * +value[1];
  }
  
  if (input.value.includes("-")) {    
    let value = input.value.split("-");
    input.value = +value[0] - +value[1];
  }

  if (input.value.includes("+")) {    
    let value = input.value.split("+");
    input.value = +value[0] + +value[1];
  } 
  result = input.value;
  addHistory(); 
}

equals.addEventListener("click", equal);


function addHistory() {
  let item = document.createElement("LI");
  item.textContent = exp + "=" + result;
  item.addEventListener("click", (e) => {
    expression = e.target.textContent.split("=");
  input.value = expression[0];
  })
  history.appendChild(item);
}

clearHistory.addEventListener("click", () => {
  history.textContent = "";
  input.value = ""
})




















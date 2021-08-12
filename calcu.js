"use strict";
const screen1El = document.querySelector(".screen-1");
const screen2El = document.querySelector(".screen-2");
const numbersEl = document.querySelectorAll(".num");
const operationEl = document.querySelectorAll(".operator");
const totalEl = document.querySelector(".total");
const clearAllEl = document.querySelector(".clear");
const clearLastEl = document.querySelector(".delete");

let dis1Num = "";
let dis2Num = "";
let output = null;
let lastOperation = "";
let haveDot = false;
console.log(numbersEl);
console.log(screen2El.innerText);
numbersEl.forEach((num) => {
    num.addEventListener("click", (e) => {
        if (e.target.innerText === "." && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === "." && haveDot) {
            return;
        }
        dis2Num += e.target.innerText;
        screen2El.innerText = dis2Num;
        console.log();
    });
});

operationEl.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        if (!dis2Num) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation) {
            mathOperation();
        } else {
            output = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(output);
    });
});

function clearVar(name = "") {
    dis1Num += dis2Num + " " + name + " ";
    screen1El.innerText = dis1Num;
    screen2El.innerText = "";
    dis2Num = "";
}

function mathOperation() {
    if (lastOperation === "*") {
        output = parseFloat(output) * parseFloat(dis2Num);
    } else if (lastOperation === "+") {
        output = parseFloat(output) + parseFloat(dis2Num);
    } else if (lastOperation === "-") {
        output = parseFloat(output) - parseFloat(dis2Num);
    } else if (lastOperation === "/") {
        output = parseFloat(output) / parseFloat(dis2Num);
    } else if (lastOperation === "%") {
        output = (parseFloat(output) * parseFloat(dis2Num)) / 100;
    }
}

totalEl.addEventListener("click", () => {
    if (!dis2Num || !dis1Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    screen2El.innerText = output;

    dis2Num = output;
    dis1Num = "";
});

clearAllEl.addEventListener("click", () => {
    dis1Num = "";
    dis2Num = "";
    screen1El.innerText = "";
    screen2El.innerText = "";
    output = "";
});

clearLastEl.addEventListener("click", () => {
    screen2El.innerText = "";
    dis2Num = "";
});
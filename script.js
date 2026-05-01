/*****
 * Elements in this file are created by Nanna.
 * Date: Februar 2026
 * Beskrivelse: This is the main JavaScript file for my portfolio website.
 * Version: 1.0
 * License: MIT
 * Tags: portfolio, javascript, multimediedesigner, web development
 * Status: In development
 */

const createContext = document.createElement("div");
const createContextheader = document.createElement("h2");
createContextheader.textContent = "Oprettet med JavaScript";
createContext.textContent = "Dette er et test af at lave et element med javascript og tilføje det til HTML siden.";

/**********************
 * Hent Elementer fra HTML via id
 * Eksempel: 
 *************************/
const title = document.getElementById("introHeader");
const introText = document.getElementById("introText");
const paragraph = document.getElementById("paraText");

/****
 * Tilføj funktion fra HTML
 * Eksempel:
 * ***********************/
title.textContent = "Portfolio 2026";
introText.textContent = "Multimediedesigner med fokus på visuelt design og digitale løsninger";
paragraph.textContent = "<p>Visuelt design med digitale løsninger i fokus. Frontend udvikler med erfaring i HTML, CSS og JavaScript.</p>";


const header = document.createElement("header");
header.textContent = "Dette er min header lavet med javascript";
/**********************
 * Interaktive Elementer
 * Eksempel: Dette vises på siden "sættes ind i body"
 *************************/

/*document.body.append(title);*/
/*document.body.appendChild(paragraph);*/

/*
Button funktion*/
function sectionHome() {
    const section = document.getElementById("sectionHome");
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Section with id "intro" not found.');
    }
}
function scrollToSection() {
    const section = document.getElementById("kontakt");
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Section with id "kontakt" not found.');
    }
}

function sectionProjects() {
    const section = document.getElementById("sectionProjects");
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Section with id "sectionProjects" not found.');
    }
}

function kontakt() {
    const section = document.getElementById("kontakt");
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Section with id "kontakt" not found.');
    }
}

function newpag() {
    window.open("calculator.html", "_blank");
}

function newpag_sensade() {
    window.open("https://www.sensade.com", "_blank");
}

console.log("Hello World! This is my portfolio website.");

// En pop-up boks vil komme frem, når man åbner i en ny browser
alert("Goddag og velkommen til mit portfolio!");

//kalde på tekst ved at trykke på en knap
function change() {
    let btnpara = document.getElementById('btnChanged');
    btnpara.innerHTML = "Du har trykket én gang på knappen"
}

const paragraphElement = document.getElementById('test');
if (paragraphElement) {
    paragraphElement.innerHTML = 'Dette er også javascript';
    paragraphElement.style.color = 'blue';
} else {
    console.error('element with not found');
}

function up() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Pixel art functions
console.log("Pixel art example:");

let containerpixel = document.getElementById('containerpixel');

if (containerpixel) 
    console.log("Container for pixel art found.");
const pixelpalette = {
    1: "#000000",
    2: "#FFFF00",
    3: "#FF0000",
}

const pixelGrid = [[
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0 ],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0 ],
    [0, 1, 2, 2, 1, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0 ],
    [0, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2, 1, 0, 0, 0, 0 ],
    [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0 ],
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1 ],
    [0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3 ,2 ,1 ],
    [0 ,0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3 ,2 ,1 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1 ],
    [0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3 ,2 ,1 ],
    [0 ,0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3 ,2 ,1 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1 ],
]]

//calculator functions
function add() {
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    let result = num1 + num2;
    document.getElementById('display').value = result;
}

function subtract() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 - num2;
    document.getElementById('display').value = result;
}

function multiply() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 * num2;
    document.getElementById('display').value = result;
}

function divide() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    if (num2 !== 0) {
        let result = num1 / num2;
        document.getElementById('display').value = result;
    } else {
        alert("Error: Division by zero is not allowed.");
        document.getElementById('display').value = "Error";
    }
}

function number0() {
    document.getElementById('display').value += "0";
}

function number1() {
    document.getElementById('display').value += "1";
}

function number2() {
    document.getElementById('display').value += "2";
}

function number3() {
    document.getElementById('display').value += "3";
}

function number4() {
    document.getElementById('display').value += "4";
}

function number5() {
    document.getElementById('display').value += "5";
}

function number6() {
    document.getElementById('display').value += "6";
}

function number7() {
    document.getElementById('display').value += "7";
}

function number8() {
    document.getElementById('display').value += "8";
}

function number9() {
    document.getElementById('display').value += "9";
}
function multiply() {
    document.getElementById('display').value += "*";
}
function divide() {
    document.getElementById('display').value += "/";
}
function add() {
    document.getElementById('display').value += "+";
}
function subtract() {
    document.getElementById('display').value += "-";
}

// Decimal the result on the display.
function result() {
    try {
        let expression = document.getElementById('display').value;
        let result = eval(expression);
        document.getElementById('result').innerHTML = "Result: " + result;
    } catch (error) {
        alert("Error: Invalid expression.");
        document.getElementById('result').innerHTML = "Result: Error";
    }
}
// Clear all the result on the display
function clearAll() {
    document.getElementById('display').value = "";
    document.getElementById('result').innerHTML = "Result: ";
}

// Husk at tilføje element, når man beregner tal med komma.
//[ ]: Add functionality for decimal point input
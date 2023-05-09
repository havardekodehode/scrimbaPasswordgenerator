let characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let charactersWOSymbols = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

let charactersWONumbers = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let charactersWNumbersAndSymbols = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let slider = document.getElementById("myRange");
let output = document.getElementById("sliderValue");
output.textContent = slider.value;

slider.oninput = function () {
  output.textContent = this.value;
};

let pass1El = document.getElementById("pass1El");
let pass2El = document.getElementById("pass2El");
let pass1 = "";
let pass2 = "";
let numCheck = document.getElementById("numbersCheck").checked;
let symCheck = document.getElementById("symbolsCheck").checked;
let charArr = characters;

function updateToggleState() {
  numCheck = document.getElementById("numbersCheck").checked;
  symCheck = document.getElementById("symbolsCheck").checked;

  if (numCheck && symCheck) {
    charArr = charactersWNumbersAndSymbols;
    //console.log("num and sym");
    //console.log(charArr.length);
  } else if (symCheck) {
    charArr = charactersWONumbers;
    //console.log(charArr);
    //console.log("sym");
    //console.log(charArr.length);
  } else if (numCheck) {
    charArr = charactersWOSymbols;
    // console.log("num");
    // console.log(charArr.length);
  } else {
    charArr = characters;
    //console.log("letters");
    //console.log(charArr.length);
  }
}

function passwordgenerator(length) {
  for (i = 0; i < length; i++) {
    pass1 += charArr[Math.floor(Math.random(1) * charArr.length)];
    if (pass1.length > 10) {
      pass1 += "\n";
    }
  }
  for (i = 0; i < length; i++) {
    pass2 += charArr[Math.floor(Math.random(1) * charArr.length)];
    if (pass2.length > 10) {
      pass2 += "\n";
    }
  }
}

function generate() {
  passwordgenerator(slider.value);
  pass1El.textContent = pass1;
  pass2El.textContent = pass2;
  pass1 = "";
  pass2 = "";
}

function copy1() {
  console.log("hei");
  let copyText = pass1El.textContent;
  navigator.clipboard.writeText(copyText);
  alert(
    "Copied the password starting with: " + pass1El.textContent.substring(0, 10)
  );
}
function copy2() {
  let copyText2 = pass1El.textContent;
  navigator.clipboard.writeText(copyText2);
  alert(
    "Copied the password starting with: " + pass2El.textContent.substring(0, 10)
  );
}

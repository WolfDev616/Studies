const morgottsWisdomListNegative = [
    "Have it writ upon thy meagre grave: Felled by thy own meagerness!",
    "The thrones... stained by thy stupidity... Such shame I cannot bear.",
    "The Erdtree wards you off, stupid.",
    "Foul Tarnished deprived of wit!",
    "You'll fall due to sheer ignorance.",
    "Grace has left you.",
    "Wisdom has left you.",
    "Wisdom is unexistant in thy meager spirit."
];

const morgottsWisdomListPositive = [
    "The Erdtree bestowed you with knowledge.",
    "You may be blessed in your wits.",
    "Queen Marika has granted you intelligence.",
    "Tarnished, but not foul.",
    "Behold a soul that is not so ignorant, Father.",
    "Mother, thy tarnished is wise."
]

const wiseWords = [
  "recursion", "backtracking", "unification", "vector",
  "pointer", "struct", "dataframe", "groupby",
  "rigidbody", "physics", "gdscript", "pipeline",
  "algorithm", "limit", "derivative", "predicate"
];

const forbiddenWords = [
  "idiot", "stupid", "dumb", "moron",
  "damn", "crap", "garbage",
  "spam", "ad", "click here"
];


const morgottImage = document.getElementById("morgottImage");
const morgottsWisdom = document.getElementById("morgottsWisdom");
const wisdomButton = document.getElementById("wisdomButton");
const wisdomInput = document.getElementById("wisdomInput");

var indexPositive = 0;
var indexNegative = 1;


function changeColor(element, color) {
    element.style.color = color;
}  

function changeImageEasy(image) {
    image.style.transform = 'scale(1.05)'
}

function changeImageBack(image) {
    image.style.transform = 'scale(1.00)'
}

function processMessage() {
    
    if (wisdomInput.value == "") {
        wisdomInput.placeholder = "Make your statement first, rat.";
        return;

    } else {        
        if (wisdomInput.value.length % 2 === 0) {
            indexPositive === (morgottsWisdomListPositive.length - 1) ? indexPositive = 0 : indexPositive++
            morgottsWisdom.innerText = morgottsWisdomListPositive[indexPositive];  
            wisdomInput.value = "";
            console.log("Divine thinking 🧠");
        } else {
            indexNegative === (morgottsWisdomListNegative.length - 1) ? indexNegative = 0 : indexNegative++
            morgottsWisdom.innerText = morgottsWisdomListNegative[indexNegative];  
            wisdomInput.value = "";
            console.log("You're condemned 🤪");
            
        }
    }
}

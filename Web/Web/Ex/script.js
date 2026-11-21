// getElementByTagName
const title = document.getElementsByTagName("h2")
console.log("Selecting element by h2 tag: ", title)

// getElementByClassName
const paragraphItems = document.getElementsByClassName("text-list")
console.log("Selecting element by class: ", paragraphItems)

// getElementByID
const highlightedItems = document.getElementById("highlighted")
console.log("Selecting element by ID: ", highlightedItems)

// querySelector 
const highlightedSelector = document.querySelector("#highlighted")
console.log("Selecting element by CSS Selector: ", highlightedSelector)

// querySelectorAll
const allItems = document.querySelectorAll(".text-list")
console.log("Selecting multiple elements by CSS Selector: ", allItems)

// getElementByName
const inputName = document.getElementsByName('username')
console.log("Selecting elements by name: ", inputName)

// querySelector("*")
const allElements = document.querySelectorAll("*")
console.log("Selecting all elements: ", allElements)

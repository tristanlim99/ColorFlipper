const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; //#f15025
const btn = document.getElementById("btn"); //dom manipulation of the button html element
const color = document.querySelector(".color"); //the h4/span element that changes text with the color

//addEventListener for the button everytime it's clicked
btn.addEventListener("click", () => {
  let hexColor = "#"; //should be the first value to generate in hex color

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()]; //The for loop logic is hexColor var + hex Var[with callback function] for 6 times
  } //the idea is that the hex variable should be looped individually for 6 times
  color.textContent = hexColor; //the text content should be equal to the reassigned hexColor var
  document.body.style.backgroundColor = hexColor; //Background color should be equal to the reassigned hexColor var
});

const getRandomNumber = () => Math.floor(Math.random() * hex.length); //function to generate a random items in the string

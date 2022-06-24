const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; //fixed colors variable to get randomly
const btn = document.getElementById("btn"); //dom manipulation of the button html element
const color = document.querySelector(".color"); //the h4/span element that changes text with the color

//addeventlistener with anonymous function for the btn element that is manipulated
btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber(); //variable to get random number between 0 - 3 using a callback function
  document.body.style.backgroundColor = colors[randomNumber]; //manipulation of the background color when btn is clicked using the colors variable
  color.textContent = colors[randomNumber]; //manipulation of the h4 text that is in colors variable
});

const getRandomNumber = () => Math.floor(Math.random() * colors.length); // function to return a random string in array between 0-3

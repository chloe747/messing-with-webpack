import * as style from "./contentStyle.css";
import randomRgb from "helpers/randomRgb";
import createContentText from "./createContentText";

export default function() {
  //just going to create a random RGB code and create a square to display on the page

  //create the DIV
  const randomColourDiv = document.createElement('DIV');
  randomColourDiv.className = `${style['content-block']} ${style['content-text--container']}`;

  //get the random colour
  const randomColour = randomRgb();

  //set the random colour
  randomColourDiv.style.backgroundColor = `${randomColour}`;

  //set onclick listener to change the colour of the divs
  randomColourDiv.addEventListener("click", () => {
    const newRandomColour = randomRgb();
    randomColourDiv.style.backgroundColor = `${newRandomColour}`;
  })

  //append the content text
  randomColourDiv.appendChild(createContentText());

  return randomColourDiv;
}

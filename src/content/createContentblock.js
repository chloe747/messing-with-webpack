import * as style from "./contentStyle.css";
import randomRgb from "helpers/randomRgb";

export default function() {
  //just going to create a random RGB code and create a square to display on the page

  //create the DIV
  const randomColourDiv = document.createElement('DIV');
  randomColourDiv.className = style['content-block'];

  //get the random colour
  const randomColour = randomRgb();

  //set the random colour
  randomColourDiv.style.backgroundColor = `${randomColour}`;

  return randomColourDiv;
}

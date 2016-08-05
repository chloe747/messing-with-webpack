import * as style from "./contentStyle.css";

export default function() {

  //create the P element and a text node
  const textElement = document.createElement('P');
  const text = document.createTextNode("Click to change colour!");

  //append the text to the p element
  textElement.appendChild(text);

  //add the styling to the p element
  textElement.className = style['content-text'];

  return textElement;
}

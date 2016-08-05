import * as style from "./contentStyle.css";
import createContentblock from "./createContentblock";

export default function() {
  const COLOUR_DIVS_TO_CREATE = 16;

  //create content content content container
  const container = document.createElement('DIV');
  container.className = style['content-container'];

  //append random colour divs
  for(let i = 0; i < COLOUR_DIVS_TO_CREATE; i++) {
    container.appendChild(createContentblock());
  }

  //return the content container
  return container;
}

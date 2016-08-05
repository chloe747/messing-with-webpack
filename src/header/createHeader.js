import * as styles from "./header.css";

export default function() {
  
  //create and style the header element
  const header = document.createElement('HEADER');
  header.className = `${styles['header']} ${styles['header-center']}`;

  //create and style the H1 node
  const headerH1 = document.createElement('H1');

  //create the text for the node
  const headerText = document.createTextNode('Webpack Example Funtimes!');

  //set everything to the element passed in
  header.appendChild(headerH1);
  headerH1.appendChild(headerText);

  //return the header
  return header;
}

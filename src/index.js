import * as style from 'style.css';
import createHeader from 'header/createHeader';
import createContent from 'content/createContent';

//grab the existing app div
const entryPointDiv = document.querySelector('#app');

//add another div so that we can center our content
const appDiv = document.createElement('DIV');

//apply styling
appDiv.className = style['app'];

//append the div to the div already in index.html
entryPointDiv.appendChild(appDiv);

//create the header
createHeader(appDiv);

//create the content
createContent(appDiv);

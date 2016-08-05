import * as style from 'style.css';
import createHeader from 'header/createHeader';
import createContent from 'content/createContent';

const entryPointDiv = document.querySelector('#app');
const appDiv = document.createElement('DIV');
appDiv.className = style['app'];
entryPointDiv.appendChild(appDiv);
createHeader(appDiv);
createContent(appDiv);

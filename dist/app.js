!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function(e,t,r){"use strict";var n=r(/*! moarRender */2);document.write("I compiled yay!\n"),n()},/*!*******************************!*\
  !*** ./src/evenMoarRender.js ***!
  \*******************************/
function(e,t){"use strict";e.exports=function(){document.write("evenMoarRender -- MORE RENDER STUFF YAY WEBPACK!")}},/*!***************************!*\
  !*** ./src/moarRender.js ***!
  \***************************/
function(e,t,r){"use strict";var n=r(/*! evenMoarRender */1);e.exports=function(){document.write("moarRender -- More compile yay!"),n()}}]);
//# sourceMappingURL=app.js.map
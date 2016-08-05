#Messing with Webpack
##Created by Chloe Smith - github.com/chloe747

###How to use
To use this little demo project, simply clone this repo, then when the repo has
cloned, run

```
npm install
```

to install the needed npm modules. once the installation is complete, run

```
npm run dev
```

in order to start up the webpack-dev-server. The webpack-dev-server will run a
node.js expressJS server on localhost:8080/webpack-dev-server/

###Tech used
####[Webpack](https://webpack.github.io/)
Webpack is the main focus of this example repo, as webpack makes all the other
tech used extremely easy to compile into regular html/js/css.

All Webpack does is 'compile' all the modules used from the entry javascript
(the entry point for this repo is the src/index.js file). Modules are the
import statements found at the top of all the project files. Since webpack
handles modules really well, you can mix and match using different tech such as
CSS/SASS/LESS, JS/CoffeeScript/ES6/ES7, etc, and have Webpack compile everything into
plain CSS/JS/HTML.

####[Babel](https://babeljs.io/)
Since ECMAScript 2015 (also known as ES6) is not yet built into browsers, you
cannot use ES6, unless you have something to compile the ES6 into ES5 (the
currently supported version of JavaScript). Babel compiles ES6 JavaScript into
browser usable ES5 JavaScript, allowing you to develop in ES6 and not worry
about whether or not browsers can understand it yet.

Since we are using Webpack, Webpack will automatically run Babel through the
[babel-loader](https://github.com/babel/babel-loader) on all .js and .jsx files.

####[SASS](http://sass-lang.com/)
SASS is a CSS that's a hell of a lot easier to use, although I haven't really
touched SASS that much other than importing CSS files (not really needed that
much when using Webpack), SASS variables and nested CSS statements.

Once again, since we are running all .css and .scss files through the
[sass-loader](https://github.com/jtangelder/sass-loader),
we are able to mix and match regular CSS with SASS and have it run fine in the
source code.

Another nice thing is the [CSS-loader](https://github.com/webpack/css-loader),
The CSS loader allows us to use CSS classes in a local namespace, so we can
have multiple css files with the same name classes that will all be
independent of eachother. This also allows us to import the CSS file as an
object, and use the classes as they come in that file.

####[CommonJS importing](https://www.npmjs.com/package/babel-plugin-transform-es2015-modules-commonjs)
althoug the import/export is an ES6 feature, you still have to import them
rather clunky by going

```
const importedThingy = import './filename';
```
That is a pain in the ass, so this babel plugin allows us to use the CommonJS
style importing seen in this project, so now we can import stuff in this neater
way
```
import importedThingy from './importedThingy';
import { A_CONSTANT, ANOTHER_CONSTANT } from 'constantsFile';
import * as style from 'stylesheets/style.css';
```
The above is much neater than assigning imports to a variable!

####[export default](https://github.com/59naga/babel-plugin-add-module-exports)
Another really nice exporting plugin for babel, instead of having to export
code and call the code by destructing a file, we can just use the export default
keyword, so then we can get the default export from that source file!
so, without this plugin, we would have to do this to import files
```
import { thisIsUneededForASingleFunctionFile } from './helperFile';
```

and now we can just do this!

```
import helperFile from './helperFile';
````

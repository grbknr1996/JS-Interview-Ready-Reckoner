//export default () => {};
//export{a1:func1,a2:func2}

//static imports-Usually present in the top of the file and we know what to import

//import an entire modules content
import * as myModule from "/modules/my-module.js";

//importing default
import myDefault from "/modules/my-module.js";

//import a single export from a module
import { myExport } from "/modules/my-module.js";

//import  multiple exports from a module
import { foo, bar } from "/modules/my-module.js";

//import an export with a more convinient alias
import { name1 as alias1, name2 as alias2 } from "/modules/my-module.js";

//import a module for its side effects only
//this runs the module's global code and this file will be parsed
import "/modules/my-modules.js";

//Dynamic Imports

//Imported file gets generated dynamically from code
/**
 *Following are reasons why you might need to use dynamic import:
 * 1.static imports increeses loading time
 * 2.static imports increases memory usage
 * 3.some modules may not exist at load time
 * 4.import string may be constructed dynamically
 * 5.when the module being imported has side effecs and you donot want those
     sideeffects unless some conditions is met
 */
//2 WAY TO DO DYNAMIC IMPORTING 1.ASYNC AWAIT 2.PROMISES

//WAY 1-promises
//TO DYNAMICALLY IMPORT A MODULE THE IMPORT KEYWORD MY BE CALLED AS FUNCTION.
//WHEN USED THIS WY IT RETURNS A PROMISE

let module = import("/modules/my-module"); //-->promise
module.then((module) => {
  //do something
});

//way 2
//async await
let module2 = await import("/modules/my-module.js");

// function foo(args,otherFn) {
//   }
// function otherFn(error,value) {
// //error first function
// }

function promisify(callback) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function handleErrorAndValue(error, value) {
        if (error == null) {
          resolve(value);
        } else {
          reject(error);
        }
      }

      callback.call(this, ...args, handleErrorAndValue);
    });
  };
}

// Do not edit the line below.
exports.promisify = promisify;

/**
 The util.promisify() method defines in utilities module of Node.js standard library.
  It is basically used to convert
  a method that returns responses using a callback function to return responses in a promise object.

  // Importing Utilities module
const util = require('util')
  
// Importing File System module
const fs = require('fs')
  
// Use promisify to convert callback
// based method fs.readdir to 
// promise based method
const readdir = util.promisify(fs.readdir)
  
readdir('process.cwd()')
  .then(files => {
    console.log(files)
  })
  .catch(err => {
    console.log(err)
  })
 */

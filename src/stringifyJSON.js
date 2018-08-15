// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// input: some object
// output: a string, or null

var stringifyJSON = function(obj) {
  // var counter;

  var counter;
  // var result = '';
  var result = '';
  // if obj is a number or is a boolean
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    // return stringified obj
    result += obj.toString();
  } else if (obj === null || typeof obj === 'undefined') { // else if obj is null or undefined
    // return null
    result += 'null';
  } else if (typeof obj === 'string') { // else if obj is a string
    // return obj (with quotes?)
    result += '"' + obj + '"';
  } else if (Array.isArray(obj)) { // if obj is an array
    // result + '['
    result += '[';
    // set counter to the length of array
    counter = obj.length;
    // iterate through array
    obj.forEach(function(el) {
      // if counter is greater than 1
      if (counter > 1) {
        // result += stringifiedJSON on each element + ','
        result += stringifyJSON(el) + ',';
      } else { // else
        // result += stringifiedJSON on each element
        result += stringifyJSON(el);
      }
      counter --;
    });
    // result += ']'
    result += ']';
  } else if (typeof obj === 'object') { // else if obj is an object
    // set counter to the amount of properties
    counter = Object.keys(obj).length;
    // result + '{'
    result += '{';
    // iterate through object
    for (var key in obj) {
      // check if value is a function or undefined
      if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined' ) {
        // do nothing
      } else {
        // if counter is greater than 1
        if (counter > 1) {
          // result += stringifyJSON(key) + ':' + stringified value + ','
          result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
        } else { // else
          // result += stringifyJSON(key) + ':' + stringified value
          result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
        }
        // result += '}'
        counter --;
      }
    }
    result += '}';
  }
  // return result
  return result;
};

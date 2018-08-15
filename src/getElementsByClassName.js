// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  //create an empty array targetClassNodes
  var targetClassNodes = [];
  //if node is undefined, then set node to document.body
  if (node === undefined) {
    node = document.body;
  }
  //if element.classList exists && element.classList equals className
  if (node.classList && node.classList.contains(className)) {
    //push the current nodes into targetClassNodes
    targetClassNodes.push(node);
  }
  if (node.childNodes) {
    node.childNodes.forEach( function(child) {
      targetClassNodes = targetClassNodes.concat(getElementsByClassName(className, child));
    });
  }
  //return targetClassNodes
  return targetClassNodes;
};





// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  var result = [];
  if (element === undefined) {
    element = document.body;
  }
  if (element.classList) {
    if (element.className.split(' ').indexOf(className) > -1) {
      result.push(element);
    }
  }
  if (element.childNodes) {
    element.childNodes.forEach(function(node) {
      result = result.concat( getElementsByClassName(className, node) );
    });
  }
  return result;
};


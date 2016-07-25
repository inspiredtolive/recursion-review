// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Object.prototype.toString.call(obj) === '[object Function]') {
    return null;
  }

  if (obj === undefined) {
    return null;
  }

  if ( Array.isArray(obj) ) {
    return '[' +
    obj.map(function(item) {
      return stringifyJSON(item);
    }).join(',') + ']';
  }

  if (Object.prototype.toString.call(obj) === '[object Object]') {
    var val;
    var result = [];
    Object.keys(obj).forEach(function(key) {
      val = stringifyJSON(obj[key]);
      if (val !== null) {
        result.push('\"' + key + '\":' + val);
      }
    });
    return '{' + result.join(',') + '}';
  }
  return '' + obj;
};

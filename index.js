var fs = require('fs');
var streamstache = require('streamstache');

module.exports = Cached;

function Cached(path) {
  var file = fs.readFileSync(path);
  return function(scope) {
    return streamstache(file, scope);
  };
}
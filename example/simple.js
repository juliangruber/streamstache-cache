var streamstache = require('..');
var tpl = streamstache(__dirname + '/simple.html');

tpl({ foo: 'bar' }).pipe(process.stdout);
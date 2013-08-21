
# streamstache-cache

A simple filesystem cache for [streamstache](https://github.com/juliangruber/streamstache).

## Example

```js
var Cached = require('streamstache-cache');
var tpl = Cached(__dirname + '/simple.html');

http.createServer(function(req, res) {
  tpl({ foo: 'bar' }).pipe(res);
});
```

## API

### Cached(path)

Return a function that takes an optional scope and returns a new streamstache instance for the template under `path`.

## Attention

The initial caching is done using a `fs.readFileSync`, so always create the cache at bootup time.

## Installation

With [npm](https://npmjs.org) do:

```bash
npm install streamstache-cache
```

## License

MIT
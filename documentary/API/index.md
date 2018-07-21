
## API

The package is available by importing its default function:

```js
import mismatch from 'mismatch'
```

```### mismatch
[
  ["re", "RegExp"],
  ["string", "string"],
  ["keys", "string[]"]
]
```

The function will attempt to find all matches for a given regular expression in a string using `.replace()` method, construct an object consisting of captured groups based on supplied keys, and return those objects as an array. It has an advantage over iterating over `while(RegExp.exec(string))` pattern because it does not modify the regular expression's `lastIndex` property.

%EXAMPLE: example/example.js, ../src => mismatch, javascript%

%FORK-json example example/example.js%

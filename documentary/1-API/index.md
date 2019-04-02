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

%EXAMPLE: example/example, ../src => mismatch%

%FORK-json example/example%

If an optional capturing group was not found, its key will not be included as part of the object. Also, if there are more captured groups than keys, they will also not be included.

%EXAMPLE: example/extra, ../src => mismatch%

%FORK-json example/extra%

%~%
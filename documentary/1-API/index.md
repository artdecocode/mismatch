## API

The package is available by importing its default function:

```js
import mismatch from 'mismatch'
```

%~ width="25"%

```### mismatch
[
  ["re", "RegExp"],
  ["string", "string"],
  ["keys", "string[]"],
  ["addPosition?", "boolean"]
]
```

The function will attempt to find all matches for a given regular expression in a string using `.replace()` method, construct an object consisting of captured groups based on supplied keys, and return those objects as an array. It has an advantage over iterating over `while(RegExp.exec(string))` pattern because it does not modify the regular expression's `lastIndex` property.

%EXAMPLE: example, ../src => mismatch%

%FORK-json example%

If an optional capturing group was not found, its key will not be included as part of the object. Also, if there are more captured groups than keys, they will also not be included.

%EXAMPLE: example/extra, ../src => mismatch%
%FORK-json example/extra%

To additionally add the positions at which the matches was found, the last argument, `addPositions` should be set to _true_.

%EXAMPLE: example/add-positions, ../src => mismatch%
%FORK-json example/add-positions%

%~%
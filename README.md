# mismatch

[![npm version](https://badge.fury.io/js/mismatch.svg)](https://npmjs.org/package/mismatch)

`mismatch` is a JavaScript package to return captured groups of a regular expression as objects in an array.

```sh
yarn add -E mismatch
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
  * [`mismatch(re: RegExp, string: string, keys: string[])`](#mismatchre-regexpstring-stringkeys-string-void)

## API

The package is available by importing its default function:

```js
import mismatch from 'mismatch'
```

### `mismatch(`<br/>&nbsp;&nbsp;`re: RegExp,`<br/>&nbsp;&nbsp;`string: string,`<br/>&nbsp;&nbsp;`keys: string[],`<br/>`): void`

The function will attempt to find all matches for a given regular expression in a string using `.replace()` method, construct an object consisting of captured groups based on supplied keys, and return those objects as an array. It has an advantage over iterating over `while(RegExp.exec(string))` pattern because it does not modify the regular expression's `lastIndex` property.

```javascript
/* yarn example/ */
import mismatch from 'mismatch'

const re = /(\w+)="(.+?)"/g
const string = `
<script
  crossorigin="anonymous"
  src="https://static.npmjs.com/commons.js"
  integrity="sha512-example/rhb92Zdom+ix+AYtqZ7C1DlLKEA=="
></script>
`
const keys = ['attribute', 'value']
const res = mismatch(re, string, keys)
console.log(JSON.stringify(res, null, 2))
```

```json
[
  {
    "attribute": "crossorigin",
    "value": "anonymous"
  },
  {
    "attribute": "src",
    "value": "https://static.npmjs.com/commons.js"
  },
  {
    "attribute": "integrity",
    "value": "sha512-example/rhb92Zdom+ix+AYtqZ7C1DlLKEA=="
  }
]
```

If an optional capturing group was not found, its key will not be included as part of the object. Also, if there are more captured groups than keys, they will also not be included.

```javascript
/* yarn example/extra.js */
import mismatch from 'mismatch'

const re = /(?: type="(.+?)")?\s+crossorigin="(.+?)"\s+src="(.+?)"/g
const string = `
<script
  crossorigin="anonymous"
  src="https://static.npmjs.com/commons.js"
  integrity="sha512-example/rhb92Zdom+ix+AYtqZ7C1DlLKEA=="
></script>
`
const keys = ['type', 'crossorigin']
const res = mismatch(re, string, keys)
console.log(JSON.stringify(res, null, 2))
```

```json
[
  {
    "crossorigin": "anonymous"
  }
]
```

---

(c) [Art Deco][1] 2018

[1]: https://artdeco.bz

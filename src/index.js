/**
 * Returns an array of captured groups of a regular expression as objects. Does not modify the `lastIndex` property of the regex.
 * @param {RegExp} re The regular expression used for matching.
 * @param {string} string String to find matches in.
 * @param {Array<string>} keys Keys to use to create an captured group object.
 * @param {boolean} addPositions Whether to include positions in the return.
 * @example
 *
```js
const re = /(test) inside of a (string)(\d)?/ig
const s = 'Test inside of a STRING1. TEST inside of a string.'
const keys = ['test', 'string', 'number']
const res = mismatch(re, s, keys)

// result:
[
 {
   test: 'Test',
   string: 'STRING',
   number: '1',
 },
 {
   test: 'TEST',
   string: 'string',
 },
]
```
 */
export default function mismatch(re, string, keys, addPositions = false) {
  /** @type {!Array<!Object<string, string>>} */
  const m = []
  string.replace(re, (match, ...args) => {
    // remove position and input
    const position = args[args.length - 2]
    const start = addPositions ? { position } : {}
    const p = args.slice(0, args.length - 2)
    const o = p.reduce((acc, capturedGroup, i) => {
      const key = keys[i]
      if (!(key && capturedGroup !== undefined)) return acc
      acc[key] = capturedGroup
      return acc
    }, start)
    m.push(o)
  })
  return m
}
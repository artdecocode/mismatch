/**
 * Returns an array of captured groups of a regular expression as objects. Does not modify the `lastIndex` property of the regex.
 * @param {RegExp} re The regular expression used for matching.
 * @param {string} string String to find matches in.
 * @param {string[]} keys Keys to use to create an captured group object.
 * @example
 *
 * const re = /(test) inside of a (string)(\d)?/ig
 * const s = 'Test inside of a STRING1. TEST inside of a string.'
 * const keys = ['test', 'string', 'number']
 * const res = mismatch(re, s, keys)
 *
 * // result:
 * [
 *  {
 *    test: 'Test',
 *    string: 'STRING',
 *    number: '1',
 *  },
 *  {
 *    test: 'TEST',
 *    string: 'string',
 *  },
 * ]
 */
function mismatch(re, string, keys) {
  /** @type {Object.<string, string>[]} */
  const m = []
  string.replace(re, (match, ...args) => {
    const p = args.slice(0, args.length - 2) // remove position and input
    const o = p.reduce((acc, capturedGroup, i) => {
      const key = keys[i]
      if (!(key && capturedGroup)) return acc
      acc[key] = capturedGroup
      return acc
    }, {})
    m.push(o)
  })
  return m
}

export default mismatch
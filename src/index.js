/**
 * A JavaScript package to return captured groups of a regular expression as an object. Does not modify the `lastIndex` property of the regex.
 * @param {RegExp} re The regular expression used for matching.
 * @param {string} string String to find matches in.
 * @param {string[]} keys Keys to use to create an captured group object.
 */
function mismatch(re, string, keys) {
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
/* yarn example/extra.js */
import mismatch from '../src'

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

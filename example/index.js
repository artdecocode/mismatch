/* yarn example/ */
import mismatch from '../src'

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
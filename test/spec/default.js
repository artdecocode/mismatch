import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import mismatch from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof mismatch, 'function')
  },
  async 'calls package without error'() {
    await mismatch()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await mismatch({
      type: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T

import { equal, deepEqual } from 'zoroaster/assert'
import Context from '../context'
import mismatch from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof mismatch, 'function')
  },
  'finds no matches'() {
    const re = /simple re/
    const s = 'test'
    const keys = ['t', 's']
    const res = mismatch(re, s, keys)
    deepEqual(res, [])
  },
  'finds a single match'() {
    const re = /(test) inside of a (string)/i
    const s = 'Test inside of a STRING.'
    const keys = ['test', 'string']
    const res = mismatch(re, s, keys)
    deepEqual(res, [
      {
        test: 'Test',
        string: 'STRING',
      },
    ])
  },
  'does not add undefined key'() {
    const re = /(test) inside of a (string)(\d)/i
    const s = 'Test inside of a STRING1.'
    const keys = ['test']
    const res = mismatch(re, s, keys)
    deepEqual(res, [
      {
        test: 'Test',
      },
    ])
  },
  'does not add undefined value'() {
    const re = /(test) inside of a (string)(\d)?/i
    const s = 'Test inside of a STRING.'
    const keys = ['test', 'string', 'number']
    const res = mismatch(re, s, keys)
    deepEqual(res, [
      {
        test: 'Test',
        string: 'STRING',
      },
    ])
  },
  'adds empty value'() {
    const re = /(test) inside of a (string)(\d*)/i
    const s = 'Test inside of a STRING.'
    const keys = ['test', 'string', 'number']
    const res = mismatch(re, s, keys)
    deepEqual(res, [
      {
        test: 'Test',
        string: 'STRING',
        number: '',
      },
    ])
  },
  'ignores missing keys'() {
    const re = /(test)/i
    const s = 'Test inside of a STRING1.'
    const keys = ['test', 'hello', 'world']
    const res = mismatch(re, s, keys)
    deepEqual(res, [
      {
        test: 'Test',
      },
    ])
  },
  'finds multiple matches'() {
    const re = /(test) inside of a (string)(\d)?/ig
    const s = 'Test inside of a STRING1. TEST inside of a string.'
    const keys = ['test', 'string', 'number']
    const res = mismatch(re, s, keys)
    deepEqual(res, [
      {
        test: 'Test',
        string: 'STRING',
        number: '1',
      },
      {
        test: 'TEST',
        string: 'string',
      },
    ])
  },
}

export default T

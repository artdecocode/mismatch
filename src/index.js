import { debuglog } from 'util'

const LOG = debuglog('mismatch')

/**
 * A JavaScript package to return captured groups of a regular expression as an object.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */
export default async function mismatch(config = {}) {
  const {
    type,
  } = config
  LOG('mismatch called with %s', type)
  return type
}

/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */

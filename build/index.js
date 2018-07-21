"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mismatch;

var _util = require("util");

const LOG = (0, _util.debuglog)('mismatch');
/**
 * A JavaScript package to return captured groups of a regular expression as an object.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */

async function mismatch(config = {}) {
  const {
    type
  } = config;
  LOG('mismatch called with %s', type);
  return type;
}
/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
//# sourceMappingURL=index.js.map
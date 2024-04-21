"use strict";

/**
 * @param {buffer} buffer
 * @returns {string}
 */
function toHex(buffer) {
  for (var result = "", i = 0, length = buffer.length, c = 0; i < length; ++i) {
    // faster than result = `${result}${h[((c = buffer[i]) & 0xf0) >> 4]}${h[c & 0x0f]}`;
    result += h[((c = buffer[i]) & 0xf0) >> 4];
    result += h[c & 0x0f];
  }
  return result;
}

module.exports = {
  toHex,
};

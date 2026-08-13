function parseConfig(str) {
  return eval("(" + str + ")");
}

module.exports = { parseConfig };

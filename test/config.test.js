const assert = require("node:assert/strict");
const test = require("node:test");

const { parseConfig } = require("../src/config");

test("parseConfig returns the supplied configuration", () => {
  const config = parseConfig('{"port": 8080, "features": {"search": true}}');

  assert.deepEqual(config, {
    port: 8080,
    features: { search: true },
  });
});

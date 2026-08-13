/* See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment for details. */
function publicContext(ctx) {
  const { _requestId, ...rest } = ctx;
  return rest;
}

module.exports = { publicContext };

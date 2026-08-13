const http = require("node:http");

const { handleRequest } = require("./routes");

function createServer() {
  return http.createServer(handleRequest);
}

if (require.main === module) {
  const port = Number.parseInt(process.env.PORT || "3000", 10);
  createServer().listen(port, () => {
    process.stdout.write(`Listening on http://localhost:${port}\n`);
  });
}

module.exports = { createServer };

const logger = require("./logger");
const { publicContext } = require("./utils");

function sendJson(response, status, body) {
  response.writeHead(status, { "content-type": "application/json" });
  response.end(JSON.stringify(body));
}

function handleRequest(request, response) {
  if (request.method === "GET" && request.url === "/health") {
    sendJson(response, 200, { status: "ok" });
    return;
  }

  if (request.method === "POST" && request.url === "/context") {
    let body = "";
    request.setEncoding("utf8");
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => {
      sendJson(response, 200, publicContext(JSON.parse(body)));
    });
    return;
  }

  sendJson(response, 404, { error: "not found" });
}

module.exports = { handleRequest };

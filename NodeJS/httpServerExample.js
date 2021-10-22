const http = require("http");

const url = require("url");

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url).pathname;
  if (req.method == "GET") {
    if (reqUrl == "/") {
      res.write("you are boring");
    }
  }
});
server.listen(9000);

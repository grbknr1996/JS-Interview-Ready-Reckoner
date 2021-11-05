//stream.pipe(), the method used to take a readable stream connect it
//to a writeable stream

const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  const rstream = fs.createReadStream("input.txt");
  rstream.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to 8000 PORT ...");
});

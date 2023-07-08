/*
Streams are objects that let you read data  from a source 
or write data to a destination in continous fashion .In Node.js 
there are four types of streams :-

Streaming means listening to music or watching vide in 'real time'
instead of downloading a file to your computer and watching it later.

Types of streams:

1.Readable: Strams which is used for read operation

2.Writable : Stream which is used for write operation

3.Duplex : Stream which can be used for both read and write operation

4.Transform: A type of duplex stream where the iutpit is computed based
on input

Each type of Stream is an Emitter instance and throws several events
at different instance of time:

1. data - this event is fired when there is data avaialable to read

2.end - this event is fired when there is no more data to read.

3. error- this event is fired when there us any error receiving or
    writing dat.

4. finish- this event is fired when all the data has been flushed 
   to underlying system
*/

const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  //   fs.readFile("input.txt", (err, data) => {
  //     if (err) return console.error(err);
  //     res.end(data.toString());
  //   });

  //READING VIA STREAM

  const rstream = fs.createReadStream("input.txt");
  rstream.on("data", (chunkData) => {
    res.write(chunkData);
  });

  rstream.on("end", () => {
    res.end();
  });

  rstream.on("error", (err) => {
    console.error(err);
    res.end("FILE NOT FOUND");
  });
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to 8000 PORT ...");
});

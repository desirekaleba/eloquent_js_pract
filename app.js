// let { readFile } = require("fs");
// readFile("file.txt", "utf-8", (err, text) => {
//     if (err)
//         throw err;
//     console.log("the file contains:", text);
// });

// If you don't specify the character encoding,
// node will assume you are interested in the
// binary data and will give you a Buffer object
// const { readFile } = require("fs");
// readFile("file.txt", (err, buffer) => {
//     if (err)
//         throw err;
//     console.log("The file contained: ", buffer.length, "bytes.",
//             "the first byte is:", buffer[0]);
// });

// writeFile
// const { writeFile } = require("fs");
// writeFile("file.txt", "Node has visited you", err => {
//     if (err)
//         console.log(`Failed to write file: ${err}`);
//     else console.log("File written");
// });

// readFile as a promises,this help avoid the downsides of callbacks
// const { readFile } = require("fs").promises;

// readFile("file.txt", "utf-8")
//     .then(text => {
//         console.log(`File contains : ${text}`);
//     }).catch(e => {
//         throw e;
//     });

// synchronous version of readFile, readFileSync
// const { readFileSync } = require("fs");
// console.log("The file contains: ", readFileSync("file.txt", "utf-8"));

// The http module

// const { createServer } = require("http");
// let server = createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write(`
//         <h1>Hello</h1>
//         <p> You asked for <code>${request.url}</code></p>
//     `);
//     response.end();
// });
// server.listen(8000);
// console.log("Listening!! (port: 8000)");

// to act as http client, we use the request function
// of the http module

// const { request } = require("http");
// let requestStream = request({
//     hostname: "eloquentjavascript.net",
//     path: "/20_node.html",
//     method: "GET",
//     headers: {Accept: "text/html"}
// }, response => {
//     console.log("Server responded with status code", response.statusCode);
// });
// requestStream.end();

// streams
// server
const { createServer } = require('http');
createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    request.on("data", chunk => 
        response.write(chunk.toString().toUpperCase()));
    request.on("end", () => response.end());
}).listen(8000, () => console.log("listening on port: 8000"));

// client
const { request } = require("http");
request({
    hostname: "localhost",
    port: 8000,
    method: "POST"
}, response => {
    response.on("data", chunk => 
        process.stdout.write(chunk.toString()));
}).end("Hello server");
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
const { readFile } = require("fs").promises;

readFile("file.txt", "utf-8")
    .then(text => {
        console.log(`File contains : ${text}`);
    }).catch(e => {
        throw e;
    });
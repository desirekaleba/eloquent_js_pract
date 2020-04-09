// let { readFile } = require("fs");
// readFile("file.txt", "utf-8", (err, text) => {
//     if (err)
//         throw err;
//     console.log("the file contains:", text);
// });

// If you don't specify the character encoding,
// node will assume you are interested in the
// binary data and will give you a Buffer object
const { readFile } = require("fs");
readFile("file.txt", (err, buffer) => {
    if (err)
        throw err;
    console.log("The file contained: ", buffer.length, "bytes.",
            "the first byte is:", buffer[0]);
});

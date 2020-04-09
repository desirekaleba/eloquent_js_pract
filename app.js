let { readFile } = require("fs");
readFile("file.txt", "utf-8", (err, text) => {
    if (err)
        throw err;
    console.log("the file contains:", text);
});
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
// const { createServer } = require('http');
// createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     request.on("data", chunk => 
//         response.write(chunk.toString().toUpperCase()));
//     request.on("end", () => response.end());
// }).listen(8000, () => console.log("listening on port: 8000"));

// // client
// const { request } = require("http");
// request({
//     hostname: "localhost",
//     port: 8000,
//     method: "POST"
// }, response => {
//     response.on("data", chunk => 
//         process.stdout.write(chunk.toString()));
// }).end("Hello server");

// a file server
const {
    createServer
} = require("http");

const methods = Object.create(null);

createServer((request, response) => {
    let handler = methods[request.method] || notAllowed;
    handler(request)
        .catch(error => {
            if (error.status != null) return error;
            return {
                body: String(error),
                status: 500
            };
        })
        .then(({
            body,
            status = 200,
            type = "text/plain"
        }) => {
            response.writeHead(status, {
                "Content-Type": type
            });
            if (body && body.pipe) body.pipe(response);
            else response.end(body);
        });
}).listen(8000);

async function notAllowed(request) {
    return {
        status: 405,
        body: `Method ${request.method} not allowed.`
    };
}

var {
    parse
} = require("url");
var {
    resolve,
    sep
} = require("path");

var baseDirectory = process.cwd();

function urlPath(url) {
    let {
        pathname
    } = parse(url);
    let path = resolve(decodeURIComponent(pathname).slice(1));
    if (path != baseDirectory &&
        !path.startsWith(baseDirectory + sep)) {
        throw {
            status: 403,
            body: "Forbidden"
        };
    }
    return path;
}

const {
    createReadStream
} = require("fs");
const {
    stat,
    readdir
} = require("fs").promises;
const mime = require("mime");

methods.GET = async function (request) {
    let path = urlPath(request.url);
    let stats;
    try {
        stats = await stat(path);
    } catch (error) {
        if (error.code != "ENOENT") throw error;
        else return {
            status: 404,
            body: "File not found"
        };
    }
    if (stats.isDirectory()) {
        return {
            body: (await readdir(path)).join("\n")
        };
    } else {
        return {
            body: createReadStream(path),
            type: mime.getType(path)
        };
    }
};

const {
    rmdir,
    unlink
} = require("fs").promises;

methods.DELETE = async function (request) {
    let path = urlPath(request.url);
    let stats;
    try {
        stats = await stat(path);
    } catch (error) {
        if (error.code != "ENOENT") throw error;
        else return {
            status: 204
        };
    }
    if (stats.isDirectory()) await rmdir(path);
    else await unlink(path);
    return {
        status: 204
    };
};

const {
    createWriteStream
} = require("fs");

function pipeStream(from, to) {
    return new Promise((resolve, reject) => {
        from.on("error", reject);
        to.on("error", reject);
        to.on("finish", resolve);
        from.pipe(to);
    });
}

methods.PUT = async function (request) {
    let path = urlPath(request.url);
    await pipeStream(request, createWriteStream(path));
    return {
        status: 204
    };
};

const {
    mkdir
} = require("fs").promises;

methods.MKCOL = async function (request) {
    let path = urlPath(request.url);
    let stats;
    try {
        stats = await stat(path);
    } catch (error) {
        if (error.code != "ENOENT") throw error;
        await mkdir(path);
        return {
            status: 204
        };
    }
    if (stats.isDirectory()) return {
        status: 204
    };
    else return {
        status: 400,
        body: "Not a directory"
    };
};
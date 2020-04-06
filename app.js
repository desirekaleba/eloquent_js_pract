// fetch("example/data.txt")
//     .then(response => {
//         console.log(response.status);
//         console.log(response.headers.get("Content-Type"));
//     });

// fetch("example/data.txt")
//     .then(res => res.text())
//     .then(data => console.log(data));

// fetch("example/data.txt", {method: "DELETE"})
//     .then(res => {
//         console.log(res.status);
//     });

fetch("example/data.txt", {headers: {Range: "bytes=8-19"}})
    .then(res => res.text())
    .then(console.log);
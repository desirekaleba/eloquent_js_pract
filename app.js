// fetch("example/data.txt")
//     .then(response => {
//         console.log(response.status);
//         console.log(response.headers.get("Content-Type"));
//     });

fetch("example/data.txt")
    .then(res => res.text())
    .then(data => console.log(data));
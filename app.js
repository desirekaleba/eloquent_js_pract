fetch("example/data.txt")
    .then(response => {
        console.log(response.status);
        console.log(response.headers.get("Content-Type"));
    });
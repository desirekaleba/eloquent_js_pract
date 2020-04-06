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

// fetch("example/data.txt", {headers: {Range: "bytes=8-19"}})
//     .then(res => res.text())
//     .then(console.log);

let textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", event => {
    if (event.keyCode == 113) {
        replaceSelectionWith(textarea, "DESKA");
        event.preventDefault();
    }

});

function replaceSelectionWith(field, word) {
    let from = field.selectionStart,
        to = field.selectionEnd;
    field.value = field.value.slice(0, from) + word +
        field.value.slice(to);
    // Put the cursor after the word
    field.selectionStart = from + word.length;
    field.selectionEnd = from + word.length;
}
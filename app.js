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

// let textarea = document.querySelector("textarea");
// textarea.addEventListener("keydown", event => {
//     if (event.keyCode == 113) {
//         replaceSelectionWith(textarea, "DESKA");
//         event.preventDefault();
//     }

// });

// function replaceSelectionWith(field, word) {
//     let from = field.selectionStart,
//         to = field.selectionEnd;
//     field.value = field.value.slice(0, from) + word +
//         field.value.slice(to);
//     // Put the cursor after the word
//     field.selectionStart = from + word.length;
//     field.selectionEnd = from + word.length;
// }

// let input = document.querySelector("input");
// let output = document.querySelector("#length");

// input.addEventListener("input", event => {
//     output.textContent = input.value.length;
// });

// let purple = document.querySelector("#purple");
// purple.addEventListener("change", () => {
//     document.body.style.backgroundColor = purple.checked ? "mediumpurple" : "";
// });

// let buttons = document.querySelectorAll("input[name=color]");
// for (let button of Array.from(buttons)) {
//     button.addEventListener("change", () => {
//         document.body.style.backgroundColor = button.value;
//     });
// }

// let select = document.querySelector("select");
// let output = document.querySelector("#output");
// let number = 0;

// select.addEventListener("change", () => {
//     for (let option of Array.from(select.options)) {
//         if (option.selected) {
//             number += Number(option.value);
//         }
//     }
//     output.textContent = number;
// });

// let file = document.querySelector("input");
// file.addEventListener("change", () => {
//     if (file.files.length > 0) {
//         let f = file.files[0];
//         console.log("You Chose", f.name, ", has", Math.ceil((f.size / 1024) / 1024), "of size in MB", "and was last modified on", new Date(f.lastModified));
//         if (f.type)
//             console.log("it has type", f.type);
//     }
// });

// reading a file
// let input_file = document.querySelector("input");
// let output = document.querySelector("#output");

// input_file.addEventListener("change", () => {
//     for (let file of Array.from(input_file.files)) {
//         let reader = new FileReader();
//         reader.addEventListener("load", () => {
//             if (file.type != "text/html")
//             console.log("Not an html file");
//             else
//             output.textContent = reader.result;
//         });
//         reader.readAsText(file);
//     }
// });

// storing data client side using local storage
// localStorage.setItem("username", "desirekaleba");
// console.log(localStorage.getItem("username"));
// localStorage.removeItem("username");
// console.log(localStorage.getItem("username"));

// crude note-taking application
// let list = document.querySelector("select");
// let note = document.querySelector("textarea");

// let state;

// function setState(newState) {
//     list.textContent = "";
//     for (let name of Object.keys(newState.notes)) {
//         let option = document.createElement("option");
//         option.textContent = name;
//         if (newState.selected == name)
//             option.selected == true;
//         list.appendChild(option);
//     }
//     note.value = newState.notes[newState.selected];

//     localStorage.setItem("Notes", JSON.stringify(newState));
//     state = newState;
// }

// setState(JSON.parse(localStorage.getItem("Notes")) || {
//     notes: {
//         "shopping list": "Carrots\nRaisins"
//     },
//     selected: "shopping list"
// });

// list.addEventListener("change", () => {
//     setState({notes: state.notes, selected: list.value});
// });

// note.addEventListener("change", () => {
//     setState({
//         notes: Object.assign({}, state.notes, 
//             {[state.selected]: note.value}),
//         selected: state.selected
//     });
// });

// document.querySelector("#add")
//     .addEventListener("click", () => {
//         let name = prompt("Note name");
//         if (name) {
//             setState({
//                 notes: Object.assign({}, state.notes, {[name]: ""}),
//                 selected: name
//             });
//         }
//     });

// document.querySelector("#delete")
//     .addEventListener("click", () => {
//         localStorage.removeItem("Notes");
//         list.textContent = "";
//         note.value = "";
//     });

// content negotiation to https://eloquentjavascript.net/author
// let url = "https://eloquentjavascript.net/author";
// let accept_types = [
//     "text/plain",
//     "text/html",
//     "application/json"
// ];

// async function displayTypes(){
//     for (let accept_type of accept_types) {
//         let response = await fetch(url, {headers: {accept: accept_type}});
//         console.log(`${accept_type} : ${await response.text()}`);
//     }
// }
// displayTypes();

// A javascript workbench
// document.querySelector("#button").addEventListener("click", () => {
//     let code = document.querySelector("#code").value;
//     let outputNode = document.querySelector("#output");
//     try {
//         let result = Function(code)();
//         outputNode.innerText = String(result);
//     } catch (e) {
//         outputNode.innerText = "Error: " + e;
//     }
// });

// Conway's Game of life
const width = 30, height = 15;

let gridNode = document.querySelector("#grid");
let checkboxes = [];

for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        let box = document.createElement("input");
        box.type = "checkbox";
        gridNode.appendChild(box);
        checkboxes.push(box);
    }
    gridNode.appendChild(document.createElement("br"));
}

function gridFromCheckboxes() {
    return checkboxes.map(box => box.checked);
}

function checkboxesFromGrid(grid) {
    grid.forEach((value, i) => checkboxes[i].checked = value);
}

function randomGrid() {
    let result = [];
    for (let i = 0; i < width * height; i++) {
        result.push(Math.random() < 0.3);
    }
    return result;
}

checkboxesFromGrid(randomGrid());

function countNeighbors(grid, x, y) {
    let count = 0;
    for (let y1 = Math.max(0, y -1); y1 <= Math.min(height - 1, y + 1); y1++) {
        for (let x1 = Math.max(0, x - 1); x1 <= Math.min(width - 1, x + 1); x1 ++) {
            if ((x1 != x || y1 != y) && grid[x1 + y1 * width]) {
                count++;
            }
        }
    }
    return count;
}

function nextGeneration(grid) {
    let newGrid = new Array(width * height);
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let neighbors = countNeighbors(grid, x, y);
            let offset = x + y * width;
            if (neighbors < 2 || neighbors > 3) {
                newGrid[offset] = false;
            } else if (neighbors == 2) {
                newGrid[offset] = grid[offset];
            } else {
                newGrid[offset] = true;
            }
        }
    }
    return newGrid;
}

function turn() {
    checkboxesFromGrid(nextGeneration(gridFromCheckboxes()));
}

document.querySelector("#next").addEventListener("click", turn);

let running = null;
document.querySelector("#run").addEventListener("click", () => {
    if (running) {
        clearInterval(running);
        running = null;
    } else {
        running = setInterval(turn, 400);
    }
});
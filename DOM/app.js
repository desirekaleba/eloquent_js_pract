// function talksAbout (node, string) {
//     if (node.nodeType == Node.ELEMENT_NODE) {
//         for (let i = 0; i < node.childNodes.length; i++) {
//             if (talksAbout(node.childNodes[i], string)) {
//                 return true;
//             }
//         }
//         return false;

//     } else if (node.nodeType == Node.TEXT_NODE) {
//         return node.nodeValue.indexOf(string) > -1;
//     }
// }
// console.log(talksAbout(document.body, "book"));

// // getElementsByTagName
// let link = document.getElementsByTagName("a")[0];
// console.log(link.href);

// // getElementById
// let ostrich = document.getElementById("ostrich");
// console.log(ostrich);

// let ostrich_img = document.getElementsByClassName("img")[0];
// console.log(ostrich_img);
// let paragraphs = document.body.getElementsByTagName("p");
// document.body.insertBefore(paragraphs[2], paragraphs[0]);

// function replaceImages() {
//     let images = document.body.getElementsByTagName("img");
//     for (let i = images.length -1; i >= 0; i--) {
//         let image = images[i];
//         if (image.alt) {
//             let text = document.createTextNode(image.alt);
//             image.parentNode.replaceChild(text, image);
//         }
//     }
// }

// function elt(type, ...children) {
//     let node = document.createElement(type);
//     for (let child of children) {
//         if (typeof child != "string")
//             node.appendChild(child);
//         else
//             node.appendChild(document.createTextNode(child));
//     }
//     return node;
// }

// document.getElementById("quote").appendChild(elt("footer", "-",
//                                                 elt("strong", "Desire Kaleba"),
//                                                 ", preface to the second edition of ",
//                                                 elt("em", "The Open mind"),
//                                                 ", 2003"
//                                                 ));

// Attributes
// let paras = document.body.getElementsByTagName("p");
// for (let para of Array.from(paras)) {
//     if (para.getAttribute("data-classified") == "secret")
//         para.remove();
// }

// layout
// let para = document.body.getElementsByTagName("p")[0];
// console.log("clientHeight:", para.clientHeight);
// console.log("offsetHeight:", para.offsetHeight);

// function time(name, action) {
//     let start = Date.now();
//     action();
//     console.log(name, "took", Date.now() - start, "ms");
// }
// time("naive", () => {
//     let target = document.getElementById("one");
//     while (target.offsetWidth < 2000) {
//         target.appendChild(document.createTextNode("X"));
//     }
// });

// time("clever", function() {
//     let target = document.getElementById("two");
//     target.appendChild(document.createTextNode("XXXXX"));
//     let total = Math.ceil(2000 / (target.offsetWidth / 5));
//     target.firstChild.nodeValue = "X".repeat(total);
// });

// Position and animation
// let cat = document.querySelector("img");
// let angle = Math.PI / 2;
// function animate(time, lastTime) {
//     if (lastTime =! null) {
//         angle += (time - lastTime) * 0.001;
//     }
//     cat.style.top = (Math.sin(angle) * 20) + "px";
//     cat.style.left = (Math.cos(angle) * 200) + "px";
//     requestAnimationFrame(newTime => animate(newTime, time));
// }
// requestAnimationFrame(animate);

// Building a table
// const MOUNTAINS = [{
//         name: "Kilimanjaro",
//         height: 5895,
//         place: "Tanzania"
//     },
//     {
//         name: "Everest",
//         height: 8848,
//         place: "Nepal"
//     },
//     {
//         name: "Mount Fuji",
//         height: 3776,
//         place: "Japan"
//     },
//     {
//         name: "Vaalserberg",
//         height: 323,
//         place: "Netherlands"
//     },
//     {
//         name: "Denali",
//         height: 6168,
//         place: "United States"
//     },
//     {
//         name: "Popocatepetl",
//         height: 5465,
//         place: "Mexico"
//     },
//     {
//         name: "Mont Blanc",
//         height: 4808,
//         place: "Italy/France"
//     }
// ];

// function buildTable(data) {
//     let table = document.createElement("table");

//     let headers = Object.keys(data[0]);
//     let headers_tr = document.createElement("tr");

//     headers.forEach(header => {
//         h_tr_th = document.createElement("th");
//         h_tr_th.appendChild(document.createTextNode(header));
//         headers_tr.appendChild(h_tr_th);
//     });
//     table.appendChild(headers_tr);

//     data.forEach(value => {
//         let value_tr = document.createElement("tr");

//         for(info of headers) {
//             let m_td = document.createElement("td");
//             m_td.appendChild(document.createTextNode(value[info]));
//             if (typeof value[info] == "number")
//                 m_td.style.textAlign = "right";
//             value_tr.appendChild(m_td);
//         }
//         table.appendChild(value_tr);
//     });

//     document.getElementById("mountains").appendChild(table);
// }
// buildTable(MOUNTAINS);

// Elements by tag name
// function byTagName(node, tagName) {
//     let found = [];
//     tagName = tagName.toUpperCase();

//     function explore(node) {
//         for (let i = 0; i < node.childNodes.length; i++) {
//             let child = node.childNodes[i];
//             if (child.nodeType == document.ELEMENT_NODE) {
//                 if (child.nodeName == tagName)
//                     found.push(child);
//                 explore(child);
//             }
//         }
//     }
//     explore(node);
//     return found;
// }

// console.log(byTagName(document.body, "h1").length);
// console.log(byTagName(document.body, "span").length);
// let para = document.querySelector("p");
// console.log(byTagName(para, "span").length);

//  The cat's hat
// let cat = document.querySelector("#cat");
// let hat = document.querySelector("#hat");

// let angle = 0;
// let lastTime = null;

// function animate(time) {
//     if (lastTime != null)
//         angle += (time - lastTime) * 0.001;
//         lastTime = time;
//         cat.style.top = (Math.sin(angle) * 40 + 40) + "px";
//         cat.style.left = (Math.cos(angle) * 200 + 230) + "px";
//         hat.style.top = (Math.sin(angle + Math.PI) * 40 + 40) + "px";
//         hat.style.left = (Math.cos(angle + Math.PI) * 200 + 230) + "px";

//         requestAnimationFrame(animate);
// }
// requestAnimationFrame(animate);

// Handling events
// let button = document.querySelector("button");
// button.addEventListener("mousedown", function(event) {
//     if (event.button == 0)
//         console.log("Left Button");
//     else if (event.button == 1)
//         console.log("Middle Button");
//     else if (event.button == 2)
//         console.log("Right Button");
// });

// Propagation
// let para = document.querySelector("p");
// let button = document.querySelector("button");

// para.addEventListener("mousedown", (event) => {
//     console.log("Handler for paragraph");
// });
// button.addEventListener("mousedown", (event) => {
//     console.log("Handler for button");
//     if (event.button == 2)
//         event.stopPropagation();
// });

// target

// document.body.addEventListener("click", event => {
//     if (event.target.nodeName == "BUTTON") {
//         console.log("Clicked", event.target.textContent);
//     }
// });

// Default actions
// let link = document.querySelector("a");
// link.addEventListener("click", event => {
//     console.log("Nope.");
//     event.preventDefault();
// });

// Key events
// window.addEventListener("keydown", event => {
//     if (event.key == "v") {
//         document.body.style.backgroundColor = "violet";
//     } else if (event.key == "g") {
//         document.body.style.backgroundColor = "green";
//     }
// });
// window.addEventListener("keyup", event => {
//     document.body.style.backgroundColor = "";

// });

// 
// window.addEventListener("keydown", event => {
//     if (event.key == " " && event.ctrlKey) {
//         console.log("continuing...");
//     }
// });

// mouse click
// window.addEventListener("click", event => {
//     let div = document.createElement("div");
//     div.className = "dot";
//     div.style.left = (event.pageX - 4) + "px";
//     div.style.top = (event.pageY - 4) + "px";
//     document.body.appendChild(div);
// });

// Mouse motion
// let lastX;
// let lastY;
// let bar = document.querySelector("div");

// bar.addEventListener("mousedown", event => {
//     if (event.button == 0) {
//         lastX = event.clientX;
//         lastY = event.clientY;
//         window.addEventListener("mousemove", moved);
//         event.preventDefault(); // prevent selection
//     }
// });

// function moved(event) {
//     if (event.buttons == 0) {
//         window.removeEventListener("mousemove", moved);

//     } else {
//         let distX = event.clientX - lastX;
//         let distY = event.clientY - lastY;
//         let newWidth = Math.max(10, bar.offsetWidth + distX);
//         let newHeight = Math.max(10, bar.offsetHeight + distY);
//         bar.style.width = newWidth + "px";
//         bar.style.height = newHeight + "px";
//         lastX = event.clientX;
//         lastY = event.clientY;
//         console.log("lastX", lastX, "lastY", lastY, "distX", distX, "distY", distY, "newWidth", newWidth, "newHeight", newHeight);
//     }
// }

// Touch events
// function update(event) {
//     for (let dot; dot = document.querySelector("dot");) {
//         dot.remove();
//     }
//     for (let i = 0; i < event.touches.length; i++) {
//         let {
//             pageX,
//             pageY
//         } = event.touches[i];
//         let dot = document.createElement("dot");
//         dot.style.left = (pageX - 50) + "px";
//         dot.style.top = (pageY - 50) + "px";
//         document.body.appendChild(dot);
//         252
//     }
// }
// window.addEventListener("touchstart", update);
// window.addEventListener("touchmove", update);
// window.addEventListener("touchend", update);

// Scroll Events
// Create some content
// document.body.appendChild(document.createTextNode(
//     "DESIRE KALEBA".repeat(1000)
// ));
// let bar = document.querySelector("#progress");
// window.addEventListener("scroll", () => {
//     let maxHeight = document.body.scrollHeight - innerHeight;
//     bar.style.width = `${(pageYOffset / maxHeight) * 100}%`;
// });

// Focus and Blur Events
// let help = document.querySelector("#help");
// let fields = document.querySelectorAll("input");

// for (let field of Array.from(fields)) {
//     field.addEventListener("focus", event => {
//         let text = event.target.getAttribute("data-help");
//         help.textContent = text;
//     });

//     field.addEventListener("blur", event => {
//         help.textContent = "";
//     });
// }

// Load Event
// fires a load event
// to fire an event before closing or changing the page window
// we use beforeunload event

// Timers
// let bombTimer = setTimeout(() => {
//     console.log("BOOM!");
// }, 500);

// if (Math.random() < 0.5) {
//     console.log("Defused.");
//     clearTimeout(bombTimer);
// }

// let ticks = 0;
// let clock = setInterval(() => {
//     console.log("Tick", ticks++);
//     if (ticks == 10) {
//         clearInterval(clock);
//         console.log("Stop.");
//     }
// }, 1000);

// Debouncing
// let textarea = document.querySelector("textarea");
// let timeout;
// textarea.addEventListener("input", () => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//         console.log("Typed")
//     }, 500);
// });

// let scheduled = null;
// window.addEventListener("mousemove", (event) => {
//     if (!scheduled) {
//         setTimeout(() => {
//             document.body.textContent = `Mouse at ${scheduled.pageX}, ${scheduled.pageY}`;
//             scheduled = null;
//         }, 250);
//     }
//     scheduled = event;
// });


// Ballon
// let ballon = document.querySelector("#balloon");
// let size;
// function setSize(newSize) {
// 	size = newSize;
// 	ballon.style.fontSize = size + "px";
// }
// setSize(20);

// function handleArrow(event) {
// 	if (event.key == "ArrowUp" && event.ctrlKey) {
// 		if (size > 70) {
// 			ballon.textContent = "💥";
// 			document.body.removeEventListener("keydown", handleArrow);
// 		} else {
// 			setSize(size * 1.1);
// 			event.preventDefault();
// 		}
// 	} else if (event.key == "ArrowDown" && event.ctrlKey) {
// 		setSize(size * 0.9);
// 		event.preventDefault();
// 	}
// }
// document.body.addEventListener("keydown", handleArrow);
// let dots = [];
// for (let i = 0; i < 12; i ++) {
//     let div = document.createElement("div");
//     div.className = "trail";
//     dots.push(div);
//     document.body.appendChild(div);
// }
// let currentDot = 0;
// window.addEventListener("mousemove", event => {
//     let dot = dots[currentDot];
//     dot.style.top = (event.pageY - 3) + "px";
//     dot.style.left = (event.pageX - 3) + "px";
//     currentDot = (currentDot + 1) % dots.length;
// });

// Tabs
// function asTabs(node) {
//     let tabs = Array.from(node.children).map(node => {
//         let button = document.createElement("button");
//         button.textContent = node.getAttribute("data-tabname");
//         let tab = {
//             node,
//             button
//         };
//         button.addEventListener("click", () => selectTab(tab));
//         return tab;
//     });

//     let tabList = document.createElement("div");
//     for (let {button} of tabs) {
//         tabList.appendChild(button);
//     }
//     node.insertBefore(tabList, node.firstChild);

//     function selectTab(selectedTab) {
//         for (let tab of tabs) {
//             let selected = tab == selectedTab;
//             tab.node.style.display = selected ? "" : "none";
//             tab.button.style.color = selected ? "red" : "";
//         }
//     }
//     selectTab(tabs[0]);
// }
// asTabs(document.querySelector("tab-panel"));

// SVG
// let circle = document.querySelector("circle");
// circle.setAttribute("fill", "cyan");

// canvas

// paths
// let cx = document.querySelector("canvas").getContext("2d");
// cx.beginPath();
// for (let y = 10; y < 100; y +=10) {
//     cx.moveTo(10, y);
//     cx.lineTo(90, y);
// }
// cx.stroke();

// let cx = document.querySelector("canvas").getContext('2d');
// cx.beginPath();
// cx.moveTo(50, 10);
// cx.lineTo(10, 70);
// cx.lineTo(90, 70);
// cx.fill();

// curves
// let cx = document.querySelector("canvas").getContext("2d");
// cx.beginPath();
// cx.moveTo(10, 90);
// // control = (60, 90) goal = (90, 90)
// cx.quadraticCurveTo(60, 10, 90, 90);
// cx.lineTo(60, 10);
// cx.closePath();
// cx.stroke();

// bezier Curve
// let cx = document.getElementsByTagName("canvas")[0].getContext("2d");
// cx.beginPath();
// cx.moveTo(10, 90);
// // control1 = (10, 10) control2 = (90, 10) goal = (50, 90)
// cx.bezierCurveTo(10, 10, 90, 10, 50, 90);
// cx.lineTo(90, 10);
// cx.lineTo(10, 10);
// cx.closePath();
// cx.stroke();

// let cx = document.getElementsByTagName("canvas")[0].getContext("2d");
// cx.beginPath();
// // center = (50, 50) radius=40 angle = 0 t0 7
// cx.arc(50, 50, 40, 0, 7);
// // center = (150, 50) radius = 40 angle = 0 t0 π½
// cx.arc(150, 50, 40, 0, 0.5 * Math.PI);
// cx.stroke();

// pie chart
// const results = [
//     {
//         name: "Satisfied",
//         count: 1043,
//         color: "lightblue"
//     },
//     {
//         name: "Neutral",
//         count: 563,
//         color: "lightgreen"
//     },
//     {
//         name: "Unsatisfied",
//         count: 510,
//         color: "pink"
//     },
//     {
//         name: "No comment",
//         count: 175,
//         color: "silver"
//     }
// ];

// let cx = document.querySelector("canvas").getContext("2d");
// let total = results.reduce((sum, {count}) => sum + count, 0);

// let currentAngle = -0.5 * Math.PI;

// for (let result of results) {
//     let sliceAngle = (result.count / total) * 2 * Math.PI;
//     cx.beginPath();
//     cx.arc(100, 100, 100, currentAngle, currentAngle + sliceAngle);
//     currentAngle += sliceAngle;
//     cx.lineTo(100, 100);
//     cx.fillStyle = result.color;
//     cx.fill();
// }

// images with canvas
// let cx = document.querySelector("canvas").getContext("2d");
// let img = document.createElement("img");
// img.src = "./img/hat.png";
// img.addEventListener("load", () => {
//     for (let x = 10; x < 200; x += 30) {
//         cx.drawImage(img, x, 10);
//     }
// });

// let cx = document.querySelector("canvas").getContext("2d");
// let img = document.createElement("img");
// img.src = "./img/hat.png";
// let spriteW = 24, spriteH = 30;
// img.addEventListener("load", () => {
//     let cycle = 0;
//     setInterval(() => {
//         cx.clearRect(0, 0, spriteW, spriteH);
//         cx.drawImage(img, 
//             // source rectangle
//             cycle * spriteW, 0, spriteW, spriteH,
//             // destination rectangle
//             0, 0, spriteW, spriteH);
//         cycle = (cycle + 1) % 8;
//     }, 120);
// });

// Transformation
// let cx = document.querySelector("canvas").getContext("2d");
// cx.scale(3, .5);
// cx.beginPath();
// cx.arc(50, 50, 40, 0, 7);
// cx.lineWidth = 3;
// cx.stroke();

function flipHorizontally(context, around) {
    context.translate(around, 0);
    context.scale(-1, 1);
    context.translate(-around, 0);
}
let cx = document.querySelector("canvas").getContext("2d");
let img = document.createElement("img");
img.src = "./img/cat.png";
let spriteW = 24, spriteH = 30;
img.addEventListener("load", () => {
    flipHorizontally(cx, 100 + spriteW / 2);
    cx.drawImage(img, 0, 0, spriteW, spriteH,
        100, 0, spriteW, spriteH);
});
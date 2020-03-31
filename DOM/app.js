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
let cat = document.querySelector("img");
let angle = Math.PI / 2;
function animate(time, lastTime) {
    if (lastTime =! null) {
        angle += (time - lastTime) * 0.001;
    }
    cat.style.top = (Math.sin(angle) * 20) + "px";
    cat.style.left = (Math.cos(angle) * 200) + "px";
    requestAnimationFrame(newTime => animate(newTime, time));
}
requestAnimationFrame(animate);
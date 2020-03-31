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

function replaceImages() {
    let images = document.body.getElementsByTagName("img");
    for (let i = images.length -1; i >= 0; i--) {
        let image = images[i];
        if (image.alt) {
            let text = document.createTextNode(image.alt);
            image.parentNode.replaceChild(text, image);
        }
    }
}
function talksAbout (node, string) {
    if (node.nodeType == Node.ELEMENT_NODE) {
        for (let i = 0; i < node.children.length; i++) {
            if (talksAbout(node.childNodes[i], string)) {
                return true;
            }
        }
        return false;
        
    } else if (node.NodeType == Node.TEXT_NODE) {
        return node.nodeValue.indexOf(string) > -1;
    }
}
console.log(talksAbout(document.body, "book"))
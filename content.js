walk(document.body)

// Walker function, stolen from cloud-to-butt extension and http://is.gd/mwZp7E
function walk(node) {
    let child, next

    const tag = node.tagName || ''
    if (tag.toLowerCase() === 'input' || tag.toLowerCase() === 'textarea' ||
        typeof node.classList !== 'undefined' && (node.classList.contains('ace_editor')))
        return

    switch (node.nodeType) {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild
            while (child) {
                next = child.nextSibling
                walk(child)
                child = next
            }
            break
        case 3: // Text node
            handleText(node)
            break
    }
}

function handleText(node) {
    let value = node.nodeValue

    // km to miles
    value = value.replace(/e/g, 'ë')

    node.nodeValue = value
}
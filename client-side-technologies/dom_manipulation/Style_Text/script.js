const p = document.documentElement.lastChild.firstElementChild;
console.log(p);

function ChangeFont(family) {
    p.style.fontFamily = family;
}

function ChangeAlign(align) {
    p.style.textAlign = align;
}

function ChangeHeight(line_height) {
    p.style.lineHeight = line_height;
}

function ChangeLSpace(space) {
    p.style.letterSpacing = space;
}

function ChangeIndent(indent) {
    p.style.textIndent = indent;
}

function ChangeTransform(transform) {
    p.style.textTransform = transform;
}

function ChangeDecorate(decorate) {
    p.style.textDecoration = decorate;
}

function ChangeBorder(border) {
    p.style.borderStyle = border;
}

function ChangeBorderColor(border) {
    p.style.borderColor = border;
}

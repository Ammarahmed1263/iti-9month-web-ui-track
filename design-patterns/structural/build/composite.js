class Book {
    pagesCount;
    constructor(pagesCount = 1) {
        this.pagesCount = pagesCount;
    }
    show(indent = "") {
        console.log(`${indent}Book: ${this.pagesCount} pages`);
    }
    getPages() {
        return this.pagesCount;
    }
}
/**
 * This is the composite Item
 */
class Box {
    children = [];
    add(item) {
        this.children.push(item);
    }
    remove(item) {
        const index = this.children.indexOf(item);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }
    show(indent = "") {
        console.log(`${indent}Box`);
        this.children.forEach((child) => child.show(indent + "  "));
    }
    getPages() {
        return this.children.reduce((total, child) => total + child.getPages(), 0);
    }
}
export { Book, Box };
//# sourceMappingURL=composite.js.map
class Document {
    header;
    footer;
    pages;
    text;
    constructor(header, footer, pages, text) {
        this.header = header;
        this.footer = footer;
        this.pages = pages;
        this.text = text;
    }
    clone() {
        return new Document(this.header, this.footer, this.pages, this.text);
    }
    printInfo() {
        console.log(`Header: ${this.header} | Pages: ${this.pages} | Text: ${this.text} | Footer: ${this.footer}`);
    }
}
export default Document;
//# sourceMappingURL=documentClone.js.map
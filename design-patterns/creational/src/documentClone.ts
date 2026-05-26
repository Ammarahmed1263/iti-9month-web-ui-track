interface Prototype {
  clone(): Document;
}

class Document implements Prototype {
  public header: string;
  public footer: string;
  public pages: number;
  public text: string;

  constructor(header: string, footer: string, pages: number, text: string) {
    this.header = header;
    this.footer = footer;
    this.pages = pages;
    this.text = text;
  }

  public clone(): Document {
    return new Document(this.header, this.footer, this.pages, this.text);
  }

  public printInfo(): void {
    console.log(
      `Header: ${this.header} | Pages: ${this.pages} | Text: ${this.text} | Footer: ${this.footer}`,
    );
  }
}

export default Document;

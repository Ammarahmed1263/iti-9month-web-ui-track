interface Item {
  show(indent?: string): void;
  getPages(): number;
}

class Book implements Item {
  constructor(private pagesCount: number = 1) {}

  show(indent: string = ""): void {
    console.log(`${indent}Book: ${this.pagesCount} pages`);
  }

  getPages(): number {
    return this.pagesCount;
  }
}

/**
 * This is the composite Item
 */
class Box implements Item {
  private children: Item[] = [];

  add(item: Item): void {
    this.children.push(item);
  }

  remove(item: Item): void {
    const index = this.children.indexOf(item);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  show(indent = "") {
    console.log(`${indent}Box`);

    this.children.forEach((child) => child.show(indent + "  "));
  }

  getPages(): number {
    return this.children.reduce((total, child) => total + child.getPages(), 0);
  }
}

export { type Item, Book, Box };

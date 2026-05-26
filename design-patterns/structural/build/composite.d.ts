interface Item {
    show(indent?: string): void;
    getPages(): number;
}
declare class Book implements Item {
    private pagesCount;
    constructor(pagesCount?: number);
    show(indent?: string): void;
    getPages(): number;
}
/**
 * This is the composite Item
 */
declare class Box implements Item {
    private children;
    add(item: Item): void;
    remove(item: Item): void;
    show(indent?: string): void;
    getPages(): number;
}
export { type Item, Book, Box };
//# sourceMappingURL=composite.d.ts.map
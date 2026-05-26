interface Prototype {
    clone(): Document;
}
declare class Document implements Prototype {
    header: string;
    footer: string;
    pages: number;
    text: string;
    constructor(header: string, footer: string, pages: number, text: string);
    clone(): Document;
    printInfo(): void;
}
export default Document;
//# sourceMappingURL=documentClone.d.ts.map
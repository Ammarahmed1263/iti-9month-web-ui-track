interface FurnitureFactory {
    createChair(): Chair;
    createTable(): Table;
}
interface Chair {
    sitOn(): void;
}
interface Table {
    use(): void;
}
declare class ModernFurnitureFactory implements FurnitureFactory {
    createChair(): Chair;
    createTable(): Table;
}
declare class VictorianFurnitureFactory implements FurnitureFactory {
    createChair(): Chair;
    createTable(): Table;
}
export { type FurnitureFactory, ModernFurnitureFactory, VictorianFurnitureFactory, type Chair, type Table, };
//# sourceMappingURL=furnitureFactory.d.ts.map
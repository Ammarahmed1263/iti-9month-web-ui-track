class ModernChair {
    sitOn() {
        console.log("Sitting on a modern chair.");
    }
}
class ModernTable {
    use() {
        console.log("Using a modern table.");
    }
}
class VictorianChair {
    sitOn() {
        console.log("Sitting on a Victorian chair.");
    }
}
class VictorianTable {
    use() {
        console.log("Using a Victorian table.");
    }
}
class ModernFurnitureFactory {
    createChair() {
        return new ModernChair();
    }
    createTable() {
        return new ModernTable();
    }
}
class VictorianFurnitureFactory {
    createChair() {
        return new VictorianChair();
    }
    createTable() {
        return new VictorianTable();
    }
}
export { ModernFurnitureFactory, VictorianFurnitureFactory, };
//# sourceMappingURL=furnitureFactory.js.map
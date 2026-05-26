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

class ModernChair implements Chair {
  public sitOn(): void {
    console.log("Sitting on a modern chair.");
  }
}

class ModernTable implements Table {
  public use(): void {
    console.log("Using a modern table.");
  }
}

class VictorianChair implements Chair {
  public sitOn(): void {
    console.log("Sitting on a Victorian chair.");
  }
}

class VictorianTable implements Table {
  public use(): void {
    console.log("Using a Victorian table.");
  }
}

class ModernFurnitureFactory implements FurnitureFactory {
  public createChair(): Chair {
    return new ModernChair();
  }

  public createTable(): Table {
    return new ModernTable();
  }
}

class VictorianFurnitureFactory implements FurnitureFactory {
  public createChair(): Chair {
    return new VictorianChair();
  }
  public createTable(): Table {
    return new VictorianTable();
  }
}

export {
  type FurnitureFactory,
  ModernFurnitureFactory,
  VictorianFurnitureFactory,
  type Chair,
  type Table,
};

class Pizza {
  private ingredients: string[] = [];

  public addIngredient(ingredient: string): void {
    this.ingredients.push(ingredient);
  }

  public serve(): void {
    console.log(`Serving pizza with: ${this.ingredients.join(", ")}`);
  }
}

interface PizzaChef {
  reset(): void;
  buildDough(): void;
  buildSauce(): void;
  buildToppings(): void;
  getPizza(): Pizza;
}

class MargheritaChef implements PizzaChef {
  private pizza: Pizza;

  constructor() {
    this.pizza = new Pizza();
  }

  public reset(): void {
    this.pizza = new Pizza();
  }

  public buildDough(): void {
    this.pizza.addIngredient("Thin Crust");
  }

  public buildSauce(): void {
    this.pizza.addIngredient("Tomato Sauce");
  }

  public buildToppings(): void {
    this.pizza.addIngredient("Mozzarella");
    this.pizza.addIngredient("Basil");
  }

  public getPizza(): Pizza {
    const result = this.pizza;
    this.reset();
    return result;
  }
}

class PepperoniChef implements PizzaChef {
  private pizza: Pizza;

  constructor() {
    this.pizza = new Pizza();
  }

  public reset(): void {
    this.pizza = new Pizza();
  }

  public buildDough(): void {
    this.pizza.addIngredient("Thick Crust");
  }

  public buildSauce(): void {
    this.pizza.addIngredient("Spicy Sauce");
  }

  public buildToppings(): void {
    this.pizza.addIngredient("Pepperoni");
    this.pizza.addIngredient("Mozzarella");
  }

  public getPizza(): Pizza {
    const result = this.pizza;
    this.reset();
    return result;
  }
}

class Waiter {
  public makeMargherita(builder: PizzaChef): void {
    builder.buildDough();
    builder.buildSauce();
    builder.buildToppings();
  }
  public makePepperoni(builder: PizzaChef): void {
    builder.buildDough();
    builder.buildSauce();
    builder.buildToppings();
  }
}

export { type PizzaChef, MargheritaChef, PepperoniChef, Waiter };

declare class Pizza {
    private ingredients;
    addIngredient(ingredient: string): void;
    serve(): void;
}
interface PizzaChef {
    reset(): void;
    buildDough(): void;
    buildSauce(): void;
    buildToppings(): void;
    getPizza(): Pizza;
}
declare class MargheritaChef implements PizzaChef {
    private pizza;
    constructor();
    reset(): void;
    buildDough(): void;
    buildSauce(): void;
    buildToppings(): void;
    getPizza(): Pizza;
}
declare class PepperoniChef implements PizzaChef {
    private pizza;
    constructor();
    reset(): void;
    buildDough(): void;
    buildSauce(): void;
    buildToppings(): void;
    getPizza(): Pizza;
}
declare class Waiter {
    makeMargherita(builder: PizzaChef): void;
    makePepperoni(builder: PizzaChef): void;
}
export { type PizzaChef, MargheritaChef, PepperoniChef, Waiter };
//# sourceMappingURL=pizzaBuilder.d.ts.map
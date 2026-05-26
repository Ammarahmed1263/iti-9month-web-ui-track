class Pizza {
    ingredients = [];
    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }
    serve() {
        console.log(`Serving pizza with: ${this.ingredients.join(", ")}`);
    }
}
class MargheritaChef {
    pizza;
    constructor() {
        this.pizza = new Pizza();
    }
    reset() {
        this.pizza = new Pizza();
    }
    buildDough() {
        this.pizza.addIngredient("Thin Crust");
    }
    buildSauce() {
        this.pizza.addIngredient("Tomato Sauce");
    }
    buildToppings() {
        this.pizza.addIngredient("Mozzarella");
        this.pizza.addIngredient("Basil");
    }
    getPizza() {
        const result = this.pizza;
        this.reset();
        return result;
    }
}
class PepperoniChef {
    pizza;
    constructor() {
        this.pizza = new Pizza();
    }
    reset() {
        this.pizza = new Pizza();
    }
    buildDough() {
        this.pizza.addIngredient("Thick Crust");
    }
    buildSauce() {
        this.pizza.addIngredient("Spicy Sauce");
    }
    buildToppings() {
        this.pizza.addIngredient("Pepperoni");
        this.pizza.addIngredient("Mozzarella");
    }
    getPizza() {
        const result = this.pizza;
        this.reset();
        return result;
    }
}
class Waiter {
    makeMargherita(builder) {
        builder.buildDough();
        builder.buildSauce();
        builder.buildToppings();
    }
    makePepperoni(builder) {
        builder.buildDough();
        builder.buildSauce();
        builder.buildToppings();
    }
}
export { MargheritaChef, PepperoniChef, Waiter };
//# sourceMappingURL=pizzaBuilder.js.map
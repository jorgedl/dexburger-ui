function getIngredientPriceById(ingredients, id) {
    return ingredients.find(({ id: ingredientId }) => (
        ingredientId === id
    )).price;
}

export function burgerFormula({ beefBurger }, list, total) {
    const itemPrice = getIngredientPriceById(list, 'beefBurger');
    if (beefBurger > 2) {
        const rest = beefBurger % 3;
        if (rest % 3 === 0) {
            return total + itemPrice * beefBurger * (2 / 3);
        }
        return total + (itemPrice * (beefBurger - rest) * (2 / 3)) + rest * itemPrice;
    }
    return total + itemPrice * beefBurger;
}

export function cheeseFormula({ cheese }, list, total) {
    const itemPrice = getIngredientPriceById(list, 'cheese');
    if (cheese > 2) {
        const rest = cheese % 3;
        if (rest % 3 === 0) {
            return total + itemPrice * cheese * (2 / 3);
        }
        return total + (itemPrice * (cheese - rest) * (2 / 3)) + rest * itemPrice;
    }
    return total + itemPrice * cheese;
}

export function baconFormula({ bacon }, list, total) {
    return total + (bacon * getIngredientPriceById(list, 'bacon'));
}

export function eggFormula({ egg }, list, total) {
    return total + (egg * getIngredientPriceById(list, 'egg'));
}

export function lettuceFormula({ lettuce }, list, total) {
    return total + (lettuce * getIngredientPriceById(list, 'lettuce'));
}

export function lightDiscount({ lettuce, bacon }, _, total) {
    if (lettuce > 0 && (bacon === 0)) {
        return total * 0.9;
    }
    return total;
}

const priceFormulas = [
    burgerFormula,
    cheeseFormula,
    baconFormula,
    eggFormula,
    lettuceFormula,
    lightDiscount
];

class Order {
    constructor(ingredientList = []) {
        this.ingredientList = ingredientList;
    }

    calculateOrderPrice(ingredients) {
        return priceFormulas.reduce((total, formula) => (
            formula(ingredients, this.ingredientList, total)
        ), 0);
    }

    updateOrder(ingredients) {
        this.selectedIngredients = ingredients;
        this.total = this.calculateOrderPrice(ingredients);
    }
}

export default Order;

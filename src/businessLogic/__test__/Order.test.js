/* globals test expect */
import Order, {
    burgerFormula,
    lettuceFormula,
    eggFormula,
    cheeseFormula,
    lightDiscount,
    baconFormula
} from '../Order';

const ingredientList = [
    {
        name: 'Alface',
        price: 0.4,
        id: 'lettuce'
    },
    {
        name: 'Bacon',
        price: 2,
        id: 'bacon'
    },
    {
        name: 'Hambúrguer de carne',
        price: 3,
        id: 'beefBurger'
    },
    {
        name: 'Ovo',
        price: 0.8,
        id: 'egg'
    },
    {
        name: 'Queijo',
        price: 1.5,
        id: 'cheese'
    }
];

test('Burger formula', () => {
    const total = burgerFormula({ beefBurger: 5 }, ingredientList, 0);
    expect(total).toBe(12);
});

test('Lettuce formula', () => {
    const total = lettuceFormula({ lettuce: 5 }, ingredientList, 9);
    expect(total).toBe(11);
});

test('Egg formula', () => {
    const total = eggFormula({ egg: 5 }, ingredientList, 7.5);
    expect(total).toBe(11.5);
});

test('Bacon formula', () => {
    const total = baconFormula({ bacon: 5 }, ingredientList, 7);
    expect(total).toBe(17);
});

test('Cheese formula', () => {
    const total = cheeseFormula({ cheese: 5 }, ingredientList, 0);
    expect(total).toBe(6);
});

test('Discount formula when its true', () => {
    const total = lightDiscount({ lettuce: 1, bacon: 0 }, ingredientList, 15);
    expect(total).toBe(13.5);
});

test('Discount formula when its false', () => {
    const total = lightDiscount({ lettuce: 1, bacon: 1 }, ingredientList, 5);
    expect(total).toBe(5);
});

test('Create and update order', () => {
    const order = new Order(ingredientList);
    order.updateOrder({
        lettuce: 0,
        bacon: 2,
        beefBurger: 0,
        egg: 1,
        cheese: 1
    });
    expect(order).toMatchObject({
        ingredientList:
        [
            { name: 'Alface', price: 0.4, id: 'lettuce' },
            { name: 'Bacon', price: 2, id: 'bacon' },
            { name: 'Hambúrguer de carne', price: 3, id: 'beefBurger' },
            { name: 'Ovo', price: 0.8, id: 'egg' },
            { name: 'Queijo', price: 1.5, id: 'cheese' }
        ],
        selectedIngredients: {
            lettuce: 0,
            bacon: 2,
            beefBurger: 0,
            egg: 1,
            cheese: 1
        },
        total: 6.3
    });
});


test('Calculate order total', () => {
    const order = new Order(ingredientList);
    order.updateOrder({
        lettuce: 3000,
        bacon: 1200,
        beefBurger: 462,
        egg: 453,
        cheese: 200
    });
    expect(order.total).toBe(5087.4);
});

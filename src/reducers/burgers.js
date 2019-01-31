const initialState = {
    items: [
        {
            name: 'X-Bacon',
            recipe: [
                'bacon',
                'beef-burger',
                'cheese'
            ],
            id: 'x-bacon',
            price: 6.5
        },
        {
            name: 'X-Burger',
            recipe: [
                'bacon',
                'beef-burger'
            ],
            id: 'x-burger',
            price: 5
        },
        {
            name: 'X-Egg',
            recipe: [
                'egg',
                'bacon',
                'cheese'
            ],
            id: 'x-egg',
            price: 4.3
        },
        {
            name: 'X-Egg Bacon',
            recipe: [
                'egg',
                'bacon',
                'beef-burger',
                'cheese'
            ],
            id: 'x-egg-bacon',
            price: 7.3
        }
    ]
};

export default function burgers(state = initialState, action) {
    switch (action.type) {
    case 'FETCH_BEGIN':
        return {
            ...state,
            loading: true,
            error: null
        };
    case 'FETCH_SUCCESS':
        return {
            ...state,
            loading: false,
            items: action.items
        };
    default:
        return state;
    }
}

const initialState = {
    items: [
        {
            name: 'X-Bacon',
            recipe: [
                'bacon',
                'beef-burger',
                'cheese',
            ],
            id: 'x-bacon',
        },
        {
            name: 'X-Burger',
            recipe: [
                'bacon',
                'beef-burger'
            ],
            id: 'x-burger',
        },
        {
            name: 'X-Egg',
            recipe: [
                'egg',
                'bacon',
                'cheese'
            ],
            id: 'x-egg',
        },
        {
            name: 'X-Egg Bacon',
            recipe: [
                'egg',
                'bacon',
                'beef-burger',
                'cheese',
            ],
            id: 'x-egg-bacon'
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

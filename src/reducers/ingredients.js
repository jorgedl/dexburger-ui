const initialState = {
    items: [
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
            id: 'beef-burger'
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
    ],
    error: null
};

export default function ingredients(state = initialState, action) {
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

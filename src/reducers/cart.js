const initialState = {
    items: [],
    error: null
};

export default function cart(state = initialState, action) {
    switch (action.type) {
    case 'ADD_TO_CART':
        return {
            ...state,
            items: [
                ...state.items,
                action.order
            ]
        };
    case 'CONFIRM_ORDER':
        return {
            ...state,
            loading: true
        };
    default:
        return state;
    }
}

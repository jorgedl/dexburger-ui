const initialState = {
    items: [],
    error: null,
    total: 0
};

export default function cart(state = initialState, action) {
    switch (action.type) {
    case 'ADD_TO_CART':
        return {
            ...state,
            items: [
                ...state.items,
                action.order
            ],
            total: state.total + action.order.total
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

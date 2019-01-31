const initialState = {
    items: [],
    error: null
};

export default function cart(state = initialState, action) {
    switch (action.type) {
    case 'CONFIRM_ORDER':
        return {
            ...state,
            loading: true
        };
    default:
        return state;
    }
}

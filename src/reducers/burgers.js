const initialState = {
    items: []
};

export default function burgers(state = initialState, action) {
    switch (action.type) {
    case 'MENU_FETCH_BEGIN':
        return {
            ...state,
            loading: true,
            error: null
        };
    case 'MENU_FETCH_SUCCESS':
        return {
            ...state,
            loading: false,
            items: action.items
        };
    default:
        return state;
    }
}

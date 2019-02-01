import {
    INGREDIENTS_FETCH_SUCCESS
} from '../actions/actionTypes';

const initialState = {
    items: [],
    error: null
};

export default function ingredients(state = initialState, action) {
    switch (action.type) {
    case INGREDIENTS_FETCH_SUCCESS:
        return {
            ...state,
            loading: false,
            items: action.items
        };
    default:
        return state;
    }
}

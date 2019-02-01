import {
    MENU_FETCH_SUCCESS,
    MENU_FETCH_BEGIN,
    INGREDIENTS_FETCH_SUCCESS
} from './actionTypes';

export const menuFetchBegin = () => ({
    type: MENU_FETCH_BEGIN
});

export const menuFetchSuccess = data => ({
    type: MENU_FETCH_SUCCESS,
    items: data
});

export const ingredientsFetchSuccess = data => ({
    type: INGREDIENTS_FETCH_SUCCESS,
    items: data
});

import { combineReducers } from 'redux';

import burgers from './burgers';
import ingredients from './ingredients';
import cart from './cart';

export default combineReducers({
    burgers,
    ingredients,
    cart
});

import { connect } from 'react-redux';
import axios from 'axios';

import {
    menuFetchSuccess,
    menuFetchBegin,
    ingredientsFetchSuccess
} from '../actions/menuActions';

import {
    addToCart,
} from '../actions/cartActions';

import { Menu } from '../screens';


function mapStateToProps({ burgers, ingredients }) {
    const { items } = burgers;
    return {
        items,
        ingredients: ingredients.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchMenu: async () => {
            dispatch(menuFetchBegin());
            const { data } = await axios.get('http://localhost:3000/burgers');
            dispatch(menuFetchSuccess(data));
        },
        fetchIngredients: async () => {
            const { data } = await axios.get('http://localhost:3000/ingredients');
            dispatch(ingredientsFetchSuccess(data));
        },
        addToCart: order => dispatch(addToCart(order))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

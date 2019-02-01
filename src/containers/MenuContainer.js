import { connect } from 'react-redux';

import {
    menuFetchBegin,
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
        fetchMenu: () => dispatch(menuFetchBegin()),
        fetchIngredients: () => dispatch(menuFetchBegin()),
        addToCart: order => dispatch(addToCart(order))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

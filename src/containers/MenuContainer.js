import { connect } from 'react-redux';

import {
    menuFetchBegin,
} from '../actions/menuActions';

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
        fetchIngredients: () => dispatch(menuFetchBegin())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

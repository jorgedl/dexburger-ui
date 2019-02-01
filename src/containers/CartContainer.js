import { connect } from 'react-redux';

import {
    clearCart,
} from '../actions/cartActions';

import { Cart } from '../screens';


function mapStateToProps({ cart }) {
    const { items, total } = cart;
    return {
        items,
        total
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clearCart: () => dispatch(clearCart())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);

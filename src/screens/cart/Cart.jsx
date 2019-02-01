import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import numeral from 'numeral';

import './less/Cart.less';

function renderItem(item, i) {
    const { name, total: price } = item;
    return (
        <Fragment key={`order${i}`}>
            <div>{ name }</div>
            <div className="cart__price">{ numeral(price).format('$0.00') }</div>
        </Fragment>
    );
}

function Cart({ items, total }) {
    return (
        <div className="cart">
            <h2 className="cart__title">
                { i18next.t('cart.title') }
            </h2>
            <div className="cart__items">
                <div>Total</div>
                <div className="cart__price">{ numeral(total).format('$0.00') }</div>
                { items.map(renderItem) }
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            ingredients: PropTypes.shape({})
        })
    ),
    total: PropTypes.number.isRequired
};

Cart.defaultProps = {
    items: []
};

export default Cart;

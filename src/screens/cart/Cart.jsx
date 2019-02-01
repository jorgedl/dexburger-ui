import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';

import './less/Cart.less';

function renderItem(item, i) {
    const { name } = item;
    return (
        <div key={`order${i}`}>{ name }</div>
    );
}

function Cart({ items }) {
    return (
        <div className="cart">
            <h2 className="cart__title">
                { i18next.t('cart.title') }
            </h2>
            <div className="cart__items">
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
    )
};

Cart.defaultProps = {
    items: []
};

export default Cart;

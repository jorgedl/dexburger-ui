import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';

import './less/Ingredient.less';

function Ingredient({ name, price, quantity }) {
    return (
        <Fragment>
            <div className="ingredient__name">
                { name }
            </div>
            <div className="ingredient__name">
                { numeral(price).format('$0.00') }
            </div>
            <div className="ingredient__add">
                <i className="fa fa-plus" />
            </div>
            <div className="ingredient__remove">
                <i className="fa fa-minus" />
            </div>
            <div className="ingredient__quantity">
                { quantity }
            </div>
        </Fragment>
    );
}

Ingredient.propTypes = {
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
};

export default Ingredient;

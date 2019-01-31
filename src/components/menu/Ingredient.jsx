import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';

import './less/Ingredient.less';

function Ingredient({ name, price }) {
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
                1
            </div>
        </Fragment>
    );
}

Ingredient.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default Ingredient;

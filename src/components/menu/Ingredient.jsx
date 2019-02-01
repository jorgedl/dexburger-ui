import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';

import './less/Ingredient.less';

function Ingredient({
    name,
    price,
    quantity,
    onAdd,
    onRemove
}) {
    return (
        <Fragment>
            <div className="ingredient__name">
                { name }
            </div>
            <div className="ingredient__name">
                { numeral(price).format('$0.00') }
            </div>
            <div
                onClick={onAdd}
                tabIndex="0"
                onKeyPress={onAdd}
                role="button"
                className="ingredient__add"
            >
                <i className="fa fa-plus" />
            </div>
            <div
                onClick={onRemove}
                tabIndex="0"
                onKeyPress={onRemove}
                role="button"
                className="ingredient__remove"
            >
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
    onAdd: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
};

export default Ingredient;

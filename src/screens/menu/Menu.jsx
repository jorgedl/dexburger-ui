import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { MenuOption } from '../../components';

import './less/Menu.less';

function Menu({ items, ingredients, addToCart }) {
    return (
        <div className="menu">
            <h2 className="menu__title">
                { i18next.t('menu.title') }
            </h2>
            <div className="menu__options">
                { items.map(({
                    id,
                    name,
                    price,
                    recipe
                }) => (
                    <div key={id} className="menu__option">
                        <MenuOption
                            id={id}
                            name={name}
                            price={price}
                            ingredientList={ingredients}
                            currentIngredients={recipe}
                            addToCart={addToCart}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

Menu.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
        })
    ),
    addToCart: PropTypes.func.isRequired,
    ingredients: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
        })
    ).isRequired
};

Menu.defaultProps = {
    items: []
};

export default Menu;

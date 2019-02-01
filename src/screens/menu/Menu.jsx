import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { MenuOption } from '../../components';

import './less/Menu.less';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        props.fetchMenu();
        props.fetchIngredients();
    }

    render() {
        const {
            items,
            ingredients,
            addToCart
        } = this.props;
        return (
            <div className="menu">
                <h2 className="menu__title">
                    { i18next.t('menu.title') }
                </h2>
                <div className="menu__options">
                    { (
                        ingredients.length !== 0
                        && items.length !== 0
                    ) && items.map(({
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
}

Menu.propTypes = {
    fetchMenu: PropTypes.func.isRequired,
    fetchIngredients: PropTypes.func.isRequired,
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

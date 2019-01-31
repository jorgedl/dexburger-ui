import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import './less/Menu.less';
import { MenuOption } from '../../components';

function Menu({ items, ingredients }) {
    return (
        <div className="menu">
            <h2 className="menu__title">
                { i18next.t('menu.title') }
            </h2>
            <div className="menu__options">
                { items.map(({
                    id,
                    name,
                    price
                }) => (
                    <div key={id} className="menu__option">
                        <MenuOption
                            id={id}
                            name={name}
                            price={price}
                            ingredients={ingredients}
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

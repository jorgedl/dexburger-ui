import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import numeral from 'numeral';
import { Button, Ingredient } from '..';

import './less/MenuOption.less';

class MenuOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selecting: false
        };
    }

    @autobind
    toggleSelectOption() {
        this.setState(({ selecting: prevStateSelecting }) => ({
            selecting: !prevStateSelecting
        }));
    }

    render() {
        const { selecting } = this.state;
        const { name, price, ingredients } = this.props;
        const formattedPrice = numeral(price).format('$0.00');
        if (selecting) {
            return (
                <div className="menu-option menu-option--selecting">
                    <div className="menu-option__ingredients">
                        <div><strong>Ingrediente</strong></div>
                        <div><strong>Preço</strong></div>
                        <div />
                        <div />
                        <div><strong>Qnt.</strong></div>
                        {
                            ingredients.map(({
                                id: ingredientId,
                                name: ingredientName,
                                price: ingredientPrice
                            }) => (
                                <Ingredient
                                    name={ingredientName}
                                    key={ingredientId}
                                    price={ingredientPrice}
                                />
                            ))
                        }
                    </div>
                    <div className="menu-option__actions">
                        <Button
                            onClick={this.toggleSelectOption}
                            variant="secondary"
                        >
                            Cancelar
                        </Button>
                        <Button
                            onClick={this.toggleSelectOption}
                            variant="primary"
                        >
                            Adicionar
                        </Button>
                    </div>
                    <div className="menu-option__price">{formattedPrice}</div>
                </div>
            );
        }
        return (
            <div
                className="menu-option"
                role="button"
                tabIndex="0"
                onKeyPress={this.toggleSelectOption}
                onClick={this.toggleSelectOption}
            >
                <div className="menu-option__image">
                    <div
                        className="menu-option__cartoverlay"
                    >
                        <span>Adicionar ao pedido</span>
                        <i className="fa fa-cart-plus" />
                    </div>
                </div>
                <div className="menu-option__title">{ name }</div>
                <div className="menu-option__description">Delicioso Hamburger Bovino</div>
                <div className="menu-option__price">{formattedPrice}</div>
            </div>
        );
    }
}

MenuOption.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
        })
    ).isRequired
};

export default MenuOption;

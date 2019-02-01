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
            selecting: false,
            selectedIngredients: this.populateSelectedIngredients()
        };
    }

    @autobind
    addToCart() {
        const { selectedIngredients } = this.state;
        const {
            addToCart,
            id,
            name
        } = this.props;

        const order = {
            itemId: id,
            ingredients: selectedIngredients,
            name
        };

        addToCart(order);

        this.toggleSelectOption();
    }

    @autobind
    toggleSelectOption() {
        this.setState(({ selecting: prevStateSelecting }) => ({
            selecting: !prevStateSelecting,
            selectedIngredients: this.populateSelectedIngredients()
        }));
    }

    @autobind
    changeIngredientQnt(id, operation) {
        this.setState(({ selectedIngredients }) => (
            {
                selectedIngredients: {
                    ...selectedIngredients,
                    [id]: operation(selectedIngredients[id]) < 0
                        ? 0 : operation(selectedIngredients[id])
                }
            }
        ));
    }

    populateSelectedIngredients() {
        const { currentIngredients, ingredientList } = this.props;

        const selectedIngredients = {};

        ingredientList.forEach(({ id: ingredientId }) => {
            selectedIngredients[ingredientId] = currentIngredients.filter(
                id => id === ingredientId
            ).length;
        });

        return selectedIngredients;
    }

    render() {
        const { selecting, selectedIngredients } = this.state;
        const {
            name,
            ingredientList
        } = this.props;
        const price = Object.keys(selectedIngredients).reduce((total, item) => (
            total + ingredientList.find(({ id }) => item === id).price * selectedIngredients[item]
        ), 0);
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
                            ingredientList.map(({
                                id: ingredientId,
                                name: ingredientName,
                                price: ingredientPrice
                            }) => (
                                <Ingredient
                                    name={ingredientName}
                                    key={ingredientId}
                                    price={ingredientPrice}
                                    quantity={selectedIngredients[ingredientId]}
                                    onAdd={() => (
                                        this.changeIngredientQnt(ingredientId, item => item + 1)
                                    )}
                                    onRemove={() => (
                                        this.changeIngredientQnt(ingredientId, item => item - 1)
                                    )}
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
                            onClick={this.addToCart}
                            variant="primary"
                        >
                            Adicionar
                        </Button>
                    </div>
                    <div className="menu-option__price">{numeral(price).format('$0.00')}</div>
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
            </div>
        );
    }
}

MenuOption.propTypes = {
    name: PropTypes.string.isRequired,
    currentIngredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    ingredientList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
        })
    ).isRequired,
    id: PropTypes.string.isRequired,
    addToCart: PropTypes.func.isRequired
};

export default MenuOption;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import Order from '../../businessLogic/Order';
import i18next from 'i18next';
import { MenuSelectedOption } from '..';

import './less/MenuOption.less';

class MenuOption extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selecting: false,
            selectedIngredients: {}
        };

        this.order = new Order(props.ingredientList);
    }

    @autobind
    addToCart() {
        const { selectedIngredients } = this.state;

        if (this.order.total === 0) {
            return;
        }

        const {
            addToCart,
            id,
            name
        } = this.props;

        const order = {
            itemId: id,
            ingredients: selectedIngredients,
            name,
            total: this.order.total
        };

        addToCart(order);

        this.toggleSelectOption();
    }

    @autobind
    toggleSelectOption() {
        this.setState(({ selecting: prevStateSelecting }) => {
            let selectedIngredients = {};
            if (!prevStateSelecting) {
                selectedIngredients = this.populateSelectedIngredients();
            }
            this.order.updateOrder(selectedIngredients);
            return {
                selecting: !prevStateSelecting,
                selectedIngredients
            };
        });
    }

    @autobind
    changeIngredientQnt(id, operation) {
        this.setState(({ selectedIngredients: ingredients }) => {
            const selectedIngredients = {
                ...ingredients,
                [id]: operation(ingredients[id]) < 0
                    ? 0 : operation(ingredients[id])
            };
            this.order.updateOrder(selectedIngredients);
            return {
                selectedIngredients
            };
        });
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
            ingredientList,
            id
        } = this.props;
        const price = this.order.total;
        if (selecting) {
            return (
                <MenuSelectedOption
                    changeIngredientQnt={this.changeIngredientQnt}
                    selectedIngredients={selectedIngredients}
                    ingredientList={ingredientList}
                    confirm={this.addToCart}
                    cancel={this.toggleSelectOption}
                    price={price}
                />
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
                        <span>{ i18next.t('menu.addToCart') }</span>
                        <i className="fa fa-cart-plus" />
                    </div>
                </div>
                <div className="menu-option__title">{ name }</div>
                <div className="menu-option__description">{ i18next.t(`menu.descriptions.${id}`) }</div>
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

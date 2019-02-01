import React from 'react';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import { Button, Ingredient } from '..';
import i18next from 'i18next';
import {
    lightDiscount
} from '../../businessLogic/Order';

function renderLightDiscount(selected, all) {
    if (lightDiscount(selected, all, 10) !== 10) {
        return (
            <li>
                { i18next.t('menu.discounts.light') }
            </li>
        );
    }
    return null;
}

function renderCheeseDiscount(selected) {
    if (selected.cheese > 2) {
        return (
            <li>
                { i18next.t('menu.discounts.cheese') }
            </li>
        );
    }
    return null;
}

function renderMeatDiscount(selected) {
    if (selected.beefBurger > 2) {
        return (
            <li>
                { i18next.t('menu.discounts.meat') }
            </li>
        );
    }
    return null;
}

function renderDiscounts(selectedIngredients = {}, ingredientList = []) {
    return (
        <ul className="menu-option__discounts">
            { renderLightDiscount(selectedIngredients, ingredientList) }
            { renderMeatDiscount(selectedIngredients, ingredientList) }
            { renderCheeseDiscount(selectedIngredients, ingredientList) }
        </ul>
    );
}

function MenuSelectedOption({
    selectedIngredients,
    ingredientList,
    changeIngredientQnt,
    confirm,
    cancel,
    price
}) {
    return (
        <div className="menu-option menu-option--selecting">
            <div className="menu-option__ingredients">
                <div><strong>{ i18next.t('menu.ingredient') }</strong></div>
                <div><strong>{ i18next.t('menu.price') }</strong></div>
                <div />
                <div />
                <div><strong>{ i18next.t('menu.quantityAbbreviated') }</strong></div>
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
                                changeIngredientQnt(ingredientId, item => item + 1)
                            )}
                            onRemove={() => (
                                changeIngredientQnt(ingredientId, item => item - 1)
                            )}
                        />
                    ))
                }
            </div>
            { renderDiscounts(selectedIngredients, ingredientList) }
            <div className="menu-option__actions">
                <Button
                    onClick={cancel}
                    variant="secondary"
                >
                    { i18next.t('menu.cancel') }
                </Button>
                <Button
                    onClick={confirm}
                    variant="primary"
                >
                    { i18next.t('menu.confirm') }
                </Button>
            </div>
            <div className="menu-option__price">{numeral(price).format('$0.00')}</div>
        </div>
    );
}

MenuSelectedOption.propTypes = {
    changeIngredientQnt: PropTypes.func.isRequired,
    selectedIngredients: PropTypes.shape(),
    ingredientList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
        })
    ),
    confirm: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
    price: PropTypes.number.isRequired,
};

MenuSelectedOption.defaultProps = {
    selectedIngredients: {},
    ingredientList: []
};

export default MenuSelectedOption;

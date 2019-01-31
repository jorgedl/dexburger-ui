/* globals test expect */
import React from 'react';
import { shallow } from 'enzyme';
import numeral from 'numeral';
import 'numeral/locales';

import Ingredient from '../Ingredient';

numeral.locale('pt-br');

test('Ingredient text shows as expected after numeral translation', () => {
    const ingredientMock = {
        name: 'Hamburger',
        price: 5
    };

    const wrapper = shallow(
        <Ingredient
            {...ingredientMock}
        />,
    );

    const items = wrapper.find('Fragment div');

    // console.log(items.debug());

    expect(items.at(0).text()).toBe(ingredientMock.name);
    expect(items.at(1).text()).toBe(numeral(ingredientMock.price).format('$0.00'));
});

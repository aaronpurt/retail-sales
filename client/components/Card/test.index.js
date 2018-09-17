import React from 'react';
import { mount } from 'enzyme';

import Card from './index';

describe( 'Card component', () => {

    test('has class card', () => {
        expect(wrapper.find( '.card' ).length).toEqual(1);
    });
});
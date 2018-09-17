import React from 'react';
import { mount } from 'enzyme';

import Chart from './index';

describe( 'Chart Component', () => {

    test('has class chart', () => {
        expect(wrapper.find( '.chart' ).length).toEqual(1);
    });
});
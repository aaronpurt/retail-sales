import React from 'react';
import { mount } from 'enzyme';

import Table from './index';

describe( 'Table Component', () => {

    test('has class table', () => {
        expect(wrapper.find( '.table' ).length).toEqual(1);
    });
});
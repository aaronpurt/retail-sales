import React from 'react';
import { mount } from 'enzyme';

import Header from './index';

describe( 'Header Component', () => {

    test('has element <header> </header> element', () => {
        expect(wrapper.find( 'header' ).length).toEqual(1);
    });
});
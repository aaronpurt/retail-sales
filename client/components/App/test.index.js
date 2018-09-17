import React from 'react';
import { mount } from 'enzyme';

import App from './index';

describe( 'App container', () => {

    test('App container has class container', () => {
        expect(wrapper.find( '.container' ).length).toEqual(1);
    });
    
});
import React from 'react';
import { mount } from 'enzyme';

import Card from './index';

describe( 'Card component', () => {

    // Proposal: This data would be moved to a shared area for tests. 
    // To avoid duplication
    // Or call the API directly to get real data. 

    let sharkData = {
        "id": "B007TIE0GQ",
        "title": "Shark Ninja",
        "image": "https://images-na.ssl-images-amazon.com/images/I/51h-a5IaHeL.jpg",
        "subtitle": "Magic Bullet NutriBullet 12-Piece High-Speed Blender/Mixer System",
        "tags": ["Pantry", "Obsolete", "Blender", "Lightning Deal"]
    };

    let wrapper;

    beforeEach(() => {

        wrapper = mount( <Card { ...sharkData }/> );
    });

    test('has class card', () => {
        expect(wrapper.find( '.card' ).length).toEqual(1);
    });
    test('has class card-image', () => {
        expect(wrapper.find( '.card-image' ).length).toEqual(1);
    });
    test('has class card-title', () => {
        expect(wrapper.find( '.card-title' ).length).toEqual(1);
    });
    test('has class card-subtitle', () => {
        expect(wrapper.find( '.card-subtitle' ).length).toEqual(1);
    });
    test('has class tags-container', () => {
        expect(wrapper.find( '.tags-container' ).length).toEqual(1);
    });
    test('has class icon-container', () => {
        expect(wrapper.find( '.icon-container' ).length).toEqual(1);
    });
    test('has class icon-position', () => {
        expect(wrapper.find( '.icon-position' ).length).toEqual(1);
    });
});


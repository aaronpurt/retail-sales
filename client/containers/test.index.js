import React from 'react';
import { mount } from 'enzyme';

import Card from '../components/Card/index';
import Table from '../components/Table/index';
import Chart from '../components/Chart/index';

describe( 'Home container component', () => {

    // Proposal: This data would be moved to a shared area for tests. 
    // To avoid duplication
    // Or call the API directly to get real data. 

    let sharkData = {
        "id": "B007TIE0GQ",
        "title": "Shark Ninja",
        "image": "https://images-na.ssl-images-amazon.com/images/I/51h-a5IaHeL.jpg",
        "subtitle": "Magic Bullet NutriBullet 12-Piece High-Speed Blender/Mixer System",
        "tags": ["Pantry", "Obsolete", "Blender", "Lightning Deal"],
        "sales": [
            {
              "weekEnding": "2017-01-01",
              "retailSales": 348123,
              "wholesaleSales": 255721,
              "unitsSold": 887,
              "retailerMargin": 123294
            },
            {
              "weekEnding": "2017-01-08",
              "retailSales": 256908,
              "wholesaleSales": 189678,
              "unitsSold": 558,
              "retailerMargin": 67230
            },
            {
              "weekEnding": "2017-01-15",
              "retailSales": 243522,
              "wholesaleSales": 255721,
              "unitsSold": 623,
              "retailerMargin": 567845
            }]
    };

    let wrapper;

    beforeEach(() => {

        wrapper = mount( <Card { ...sharkData }/> );
    });

    test('has class container', () => {
        expect(wrapper.find( '.container' ).length).toEqual(1);
    });
    test('has class grid-container', () => {
        expect(wrapper.find( '.grid-container' ).length).toEqual(1);
    });
    test('has class menu', () => {
        expect(wrapper.find( '.menu' ).length).toEqual(1);
    });
    test('has class chart', () => {
        expect(wrapper.find( '.chart' ).length).toEqual(1);
    });
    test('has class table', () => {
        expect(wrapper.find( '.table' ).length).toEqual(1);
    });

    // Need to test each of the components. 
    // Inprogress:

    // table

    // chart

    // card
   
});


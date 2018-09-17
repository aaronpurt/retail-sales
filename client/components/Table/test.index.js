import React from 'react';
import { mount } from 'enzyme';

import Table from './index';

describe( 'Table Component', () => {


    // Proposal: This data would be moved to a shared area for tests. 
    // To avoid duplication
    // Or call the API directly to get real data. 

    let sales =  [
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
        },
        {
          "weekEnding": "2017-01-22",
          "retailSales": 458646,
          "wholesaleSales": 356475,
          "unitsSold": 745,
          "retailerMargin": 453645
        }
    ];
    let wrapper;
    
    beforeEach(() => {

        wrapper = mount( <Chart { ...sales }/> );
    });

    test('has class table', () => {
        expect(wrapper.find( '.table' ).length).toEqual(1);
    });
});
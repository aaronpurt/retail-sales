const request = require( 'request' );
const sharkData = require('../data/sharkData.json');


/*
* Description: Exported function for getting the shark JSON data
*  Proposed Change: Changing the name from shark to getSalesData(). Making it more ambiguous to be reusable. 
*/


exports.getShark = ( req, res ) => {
    //todo: Add paging
    res.json( {
        data: sharkData,
        success: 1,
    } );
};

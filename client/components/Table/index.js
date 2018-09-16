import React from 'react';
import { render } from 'react-dom';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import './style.scss';


/*
* Description: The Table component
*  Proposed Change: Make it more resuable with mapping data with better structure. 
*/


export default class Table extends React.Component {
  constructor(props) {
    super(props);
    console.log('table props ', this.props);
    this.state = {
      data: this.props.sales
    };
  }

  /**
   * toCurrency - converts text to currency format
   * @param {string} numberString - Input string Number. Assumtion
   */
  toCurrency(numberString) {
    const number = parseFloat(numberString);

    return number.toLocaleString('USD');
  }
  /**
   * formatDate - format the specific string. 
   * @param {string} dateStr - Input string Number. Assumtion
   */
  formatDate(dateStr) {
    // Assumtions: This is assuming the date will always be formatted this way.
    // A better aproach would be to use a date/time library and format
    // example: moment.js
    // format: month-day-year

    const dateArray = dateStr.split('-');

    return `${dateArray[1]}-${dateArray[2]}-${dateArray[0]}`;
  }

  render() {
    const { sales } = this.props;

    // Assumtions: this is assuming data will be the same matched up.
    // A better approach would be to put this columns array
    //     into persistance editable location. So you dont have to edit code to change
    //      Header, etc.

    return (
      <div className="table">
        <ReactTable className='header-table'
          data={sales}
          columns={[
            {
              columns: [
                {
                  Header: 'WEEK ENDING',
                  id: 'weekEnding',
                  sortable: true,
                  filterAll: true,
                  accessor: d => this.formatDate(d.weekEnding),
                },
              ],
            },
            {
              columns: [
                {
                  Header: 'RETAIL SALES',
                  id: 'retailSales',
                  sortable: true,
                  accessor: d => `$${this.toCurrency(d.retailSales)}`,
                },
              ],
            },
            {
              columns: [
                {
                  Header: 'WHOLESALES SALES',
                  id: 'wholesaleSales',
                  sortable: true,
                  accessor: d => `$${this.toCurrency(d.wholesaleSales)}`,
                },
              ],
            },
            {
              columns: [
                {
                  Header: 'UNITS SOLD',
                  id: 'unitsSold',
                  sortable: true,
                  accessor: d => d.unitsSold,
                },
              ],
            },
            {
              columns: [
                {
                  Header: 'RETAILER MARGIN',
                  id: 'retailerMargin',
                  sortable: true,
                  accessor: d => `$${this.toCurrency(d.retailerMargin)}`,
                },
              ],
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChartBar  } from '@fortawesome/free-solid-svg-icons'

import './style.scss';

/*
* Description: The card used on the left side of the Sales Details
*  Proposition: This could be slimmed down for displaying into a Grid.
*/

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overviewLabel: 'Overview',
      salesLabel: 'Sales'
    };
    
  }

  render() {
 
    return (
      <div className="card">
        <div className="card-image">
        
          <img src={this.props.image} />
        </div>
        <p className="card-title">
            { this.props.title }
        </p>
        <p className="card-subtitle">
            { this.props.subtitle }
          </p>
        <div className="tags-container">
        {
          this.props.tags.map((data, index) => (
            <div key={index} className="tag">
             {data}
            </div>
            
          ))
        }
        </div>
        <div className='icon-container'> 
          <div className="icon-position">
          <FontAwesomeIcon icon={ faHome } className='home-icon'></FontAwesomeIcon> 
          <span className='non-active'>{ this.state.overviewLabel }</span>
          </div>
          <div className="icon-position">
            <FontAwesomeIcon icon={ faChartBar } className='chartbar-icon'/> 
            <span className='active'>{ this.state.salesLabel }</span>
          </div>
        </div>
      
      </div>
    );
  }
}

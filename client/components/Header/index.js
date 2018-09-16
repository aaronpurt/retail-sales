import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';


/*
* Description: The Header component. 
*  Proposed Change: Moving the to paths to external place for configurations. 
*/


export default function () {
  return (
    <header>
      <nav>
        <NavLink to="/">
          Stackline
        </NavLink>
       
      </nav>
    </header>
  );
}

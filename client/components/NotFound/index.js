import React, { Component } from 'react';

import './style.scss';

export default class NotFound extends Component {
  render() {
    return (
      <div className="error-page">
        <div>
          <h1 data-h1="404">
404
          </h1>
          <p data-p="NOT FOUND">
NOT FOUND
          </p>
        </div>
      </div>
    );
  }
}

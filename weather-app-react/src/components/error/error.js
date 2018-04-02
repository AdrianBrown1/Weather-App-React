import React, { Component } from 'react';

export default class Error extends Component {
  

  render () {
    return (
      <div className='error'>
        <p className='error-message'>Error: 404 - The page cannot be found</p>
      </div>
    )
  }
}

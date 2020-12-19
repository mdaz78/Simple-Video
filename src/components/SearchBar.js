import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div className='search-bar ui segment'>
        <div className='ui form'>
          <div className='field'>
            <label htmlFor=''>Video Search</label>
            <input type='text' name='' id='' />
          </div>
        </div>
      </div>
    );
  }
}

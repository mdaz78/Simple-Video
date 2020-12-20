import React, { Component } from 'react';
import SearchBar from './SearchBar';

export default class App extends Component {
  render() {
    return (
      <div className='ui container m-top-3'>
        <SearchBar />
      </div>
    );
  }
}

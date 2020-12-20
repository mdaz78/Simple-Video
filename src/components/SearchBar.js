import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  onInput = ({ target: { value } }) => {
    this.setState({
      searchTerm: value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.searchTerm);
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <div className='search-bar ui segment'>
        <div className='ui form'>
          <div className='field'>
            <form onSubmit={this.onFormSubmit}>
              <label htmlFor=''>Video Search</label>
              <input
                value={searchTerm}
                type='text'
                name=''
                id=''
                onChange={this.onInput}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from '../components/VideoList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
    });
  };

  render() {
    const { videos } = this.state;

    return (
      <div className='ui container m-top-3'>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList videos={videos} />
      </div>
    );
  }
}

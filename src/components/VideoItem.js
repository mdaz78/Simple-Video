import React from 'react';

export default function VideoItem({ video: { snippet } }) {
  const title = snippet.title;
  const thumbnail = snippet.thumbnails.medium.url;

  return (
    <div className='video-item item'>
      <img className='ui image' src={thumbnail} alt='thumbnail' />
      <div className='content'>
        <div className='header'>{title}</div>
      </div>
    </div>
  );
}

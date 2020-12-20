import React from 'react';

export default function VideoItem({ video, onVideoSelect }) {
  const { snippet } = video;
  const title = snippet.title;
  const thumbnail = snippet.thumbnails.medium.url;

  return (
    <div className='video-item item' onClick={() => onVideoSelect(video)}>
      <img className='ui image' src={thumbnail} alt={title} />
      <div className='content'>
        <div className='header'>{title}</div>
      </div>
    </div>
  );
}

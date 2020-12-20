import React from 'react';
import VideoItem from './VideoItem';

export default function VideoList({ videos, onVideoSelect }) {
  const listOfVideoItem = videos.map((video) => (
    <VideoItem
      video={video}
      key={video.id.videoId}
      onVideoSelect={onVideoSelect}
    />
  ));

  return <div className='ui relaxed divided list'>{listOfVideoItem}</div>;
}

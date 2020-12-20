import React from 'react';
import VideoItem from './VideoItem';

export default function VideoList({ videos }) {
  const listOfVideoItem = videos.map((video) => (
    <VideoItem video={video} key={video.id.videoId} />
  ));

  return <div className='ui relaxed divided list'>{listOfVideoItem}</div>;
}

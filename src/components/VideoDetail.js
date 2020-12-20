import React from 'react';

export default function VideoDetails({ video }) {
  if (!video) {
    return <div>Loading...</div>;
  }

  const {
    snippet: { title, description },
  } = video;

  const {
    id: { videoId },
  } = video;

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <div className='ui embed'>
        <iframe src={videoSrc} title={videoId}></iframe>
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

import React from 'react';

export default function VideoDetails({ video }) {
  return (
    <div>
      <h3>{video.snippet.title}</h3>
    </div>
  );
}

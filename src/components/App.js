import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "../components/VideoList";
import VideoDetail from "./VideoDetail";
import Loader from "./Loader";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [videos, search] = useVideos("react js");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSelectedVideo(videos[0]);
    setLoading(false);
  }, [videos]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="ui container m-top-3">
      <SearchBar onTermSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

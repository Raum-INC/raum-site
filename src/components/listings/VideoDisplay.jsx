import React from "react";

const VideoDisplay = ({ videoUrl, videoTitle }) => {
  const videoId = videoUrl.split("v=")[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="w-full md:w-1/2 h-auto mx-auto p-5">
      <iframe
        // width="100%"
        // height="500px"
        src={embedUrl}
        videoTitle={videoTitle}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-[300px] object-cover rounded-md"
      ></iframe>
    </div>
  );
};

export default VideoDisplay;

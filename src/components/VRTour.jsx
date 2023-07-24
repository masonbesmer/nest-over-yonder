// VRTour.js
import React from "react";

const VRTour = () => {
  return (
    <div className="vr-tour">
      {/* Replace the URL with the path to your 360-degree image or video */}
      <h3>Currently a WIP</h3>
      <iframe
        title="360-degree tour"
        width="100%"
        height="500px"
        src="https://vrtourthatwearestillworkingon.jpg"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VRTour;

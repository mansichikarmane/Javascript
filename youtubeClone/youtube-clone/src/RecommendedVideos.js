import React from 'react'
import "./RecommendedVideos.css"
import VideoCard from "./VideoCard.js";
import "./VideoCard.css";
function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard 
          title="Pigeons are Doves | NOT CLICK BAIT!"
          views="2.9M views"
          timestamp="8 minutes ago"
          channelImage=""
          channel="Drama Tea Spill"
          image="https://images.pond5.com/funny-two-family-friends-talking-footage-146301665_iconl.jpeg"
        />
        <VideoCard 
        title="DAY IN MY LIFE"
        views="31K views"
        timestamp="2 months ago"
        channelImage=""
        channel="Jinora Lawless"
        image="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaXRhdGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        />
        <VideoCard 
        title="Pigeons are Doves | NOT CLICK BAIT!"
        views="2.9M views"
        timestamp="8 minutes ago"
        channelImage=""
        channel="Drama Tea Spill"
        image="https://images.pond5.com/funny-two-family-friends-talking-footage-146301665_iconl.jpeg"
        />
        <VideoCard 
        title="Pigeons are Doves | NOT CLICK BAIT!"
        views="2.9M views"
        timestamp="8 minutes ago"
        channelImage=""
        channel="Drama Tea Spill"
        image="https://images.pond5.com/funny-two-family-friends-talking-footage-146301665_iconl.jpeg"
        />
        <VideoCard 
        title="Pigeons are Doves | NOT CLICK BAIT!"
        views="2.9M views"
        timestamp="8 minutes ago"
        channelImage=""
        channel="Drama Tea Spill"
        image="https://images.pond5.com/funny-two-family-friends-talking-footage-146301665_iconl.jpeg"
        />
        <VideoCard />
        <VideoCard />
        <VideoCard />


      </div>
    </div>
  );
}

export default RecommendedVideos

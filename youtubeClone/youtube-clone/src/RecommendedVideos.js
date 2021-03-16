import React from 'react'
import "./RecommendedVideos.css"
import VideoCard from "./VideoCard.js";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Metal Bnding!"
          views="2.3M views"
          timestamp="1 week ago"
          channelImage=""
          channel="tophrulez"
          image="https://img1.looper.com/img/gallery/what-avatar-the-last-airbender-fans-get-wrong-about-toph-beifong/intro-1602606889.jpg"
        />
        <VideoCard 
          title="A DAY IN MY LIFE AS A CABBAGE ENTHUSIAST"
          views="131K views"
          timestamp="2 months ago"
          channelImage=""
          channel="Cabbage Corp"
          image="https://img1.looper.com/img/gallery/the-truth-about-avatar-the-last-airbenders-cabbage-merchant/intro-1591722918.jpg"
        />
        <VideoCard 
          title="making the perfect cup of tea"
          views="9M views"
          timestamp="8 minutes ago"
          channelImage=""
          channel="the jasmine dragon"
          image="https://www.geekgirlauthority.com/wp-content/uploads/2020/04/Uncle-Iroh-Drinking-Tea.jpg"
        />
        <VideoCard 
          title="I was Part of a Cult | NOT clickbait"
          views="1M views"
          timestamp="8 minutes ago"
          channelImage=""
          channel="Zuko Here"
          image="https://cdn-images-1.medium.com/max/720/1*Xx9BQkHClL_DDPuB_MLzcw.png"
        />
        <VideoCard 
          title="Our Story"
          views="8.9M views"
          timestamp="2 months ago"
          channelImage=""
          channel="Aang & Katara"
          image="https://static.wikia.nocookie.net/avatar/images/3/32/Katara_kisses_Aang.png/revision/latest/scale-to-width-down/340?cb=20200803081624"
        />
        <VideoCard 
          title="Story Time: My Girlfriend Turned into the Moon *emotional*"
          views="4.5M views"
          timestamp="6 months ago"
          channelImage=""
          channel="boomerang guy"
          image="https://data.whicdn.com/images/172719019/original.png"
        />
        <VideoCard 
          title="There is No War in Ba Sing Se"
          views="13K views"
          timestamp="4 months ago"
          channelImage=""
          channel="Ju Dee"
          image="https://i1.wp.com/film-cred.com/wp-content/uploads/2020/08/MV5BN2M0ZTliMzYtNWE2MC00MzRkLTk2ZjgtMzAzM2Y5MjJkNzU5XkEyXkFqcGdeQXVyMjgyOTI4Mg@@._V1_.jpg?resize=800%2C400&ssl=1"
        />
        <VideoCard 
          title="Join the Freedom Fighters!"
          views="64K views"
          timestamp="3 weeks ago"
          channelImage=""
          channel="FREEDOM FIGHTERS"
          image="https://static.tvtropes.org/pmwiki/pub/images/team_avatar_and_freedom_fighters.png"
        />


      </div>
    </div>
  );
}

export default RecommendedVideos

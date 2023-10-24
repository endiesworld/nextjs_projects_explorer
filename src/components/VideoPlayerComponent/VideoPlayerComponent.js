import React from 'react';
import VideoPlayer from './VideoPlayer';
import styles from './videoPlayer.module.css';


function VideoPlayerComponent() {
  return (
  <div className={styles.component_wrapper}>
      <VideoPlayer 
        src="https://sandpack-bundler.vercel.app/videos/snowstorm.mp4"
        caption="Snow falls by a pine tree and house"
      />
      <div>
        <dl>
        <dt>Filmed by</dt>
        <dd>Karolina Grabowska</dd>
        <dt>Licensed under</dt>
        <dd>Creative Commons Zero (CC0)</dd>
      </dl>
      </div>
      
  </div>);
}

export default VideoPlayerComponent;

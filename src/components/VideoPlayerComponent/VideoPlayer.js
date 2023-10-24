import React from 'react';
import styles from './videoPlayer.module.css';

function VideoPlayer({ src, caption }) {
    const playbackRateSelectId = React.useId();
    const videoRef = React.useRef() ;
    const [playBack, setPlayBack] = React.useState(1) ;

    function handlePlayBack(rate) {
        setPlayBack(rate) ;
        videoRef.current.playbackRate = Number(rate) ; 
    }
    
    return (
        <div className={styles.video_contianer}>
        <figure className={styles.fig_wrapper}>
            <video
            controls
            src={src}
            ref = {videoRef}
            className={styles.video_tag}
            />
            <figcaption>
            {caption}
            </figcaption>
        </figure>
        
        <div >
            <label htmlFor={playbackRateSelectId}>
            Select playback speed:
            </label>
            <select
            id={playbackRateSelectId}
            value={playBack}
            onChange={ e => handlePlayBack(e.target.value)}
            >
            <option value="0.5">0.5</option>
            <option value="1">1</option>
            <option value="1.25">1.25</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select>
        </div>
        </div>
    );
}

export default VideoPlayer;
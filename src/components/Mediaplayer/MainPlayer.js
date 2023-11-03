import React from 'react';
import { Play, Pause } from 'react-feather';

import VisuallyHidden from './VisuallyHidden';

function MainPlayer({ src }) {
    const playerRef = React.useRef() ;
    const [isPlaying, setIsPlaying] = React.useState(false);

    function handleClick(){
        const playingState = !isPlaying ;
        setIsPlaying(playingState) ;
        playingState ? playerRef.current.play() : playerRef.current.pause() ;
    }

    return (
        <div className="wrapper">
        <div className="media-player">
            <img
            alt=""
            src="https://sandpack-bundler.vercel.app/img/take-it-easy.png"
            />
            <div className="summary">
            <h2>Take It Easy</h2>
            <p>Bvrnout ft. Mia Vaile</p>
            </div>
            <button onClick={ handleClick}>
            {isPlaying ? <Pause />: <Play /> }
            <VisuallyHidden>
                Toggle playing
            </VisuallyHidden>
            </button>
            
            <audio 
                src={src} 
                ref={playerRef}
                onEnded={() => {
                    setIsPlaying(false);
                }}
            />
        </div>
        </div>
    );
}

export default MainPlayer;
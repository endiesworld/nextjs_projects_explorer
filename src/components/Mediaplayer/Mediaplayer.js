import React from 'react';

import MainPlayer from './MainPlayer';

const DEMO_SONG_SRC = 'https://storage.googleapis.com/joshwcomeau/bvrnout-take-it-easy-short.mp3';

function Mediaplayer() {
  return (
    <>
      <MainPlayer src={DEMO_SONG_SRC} />
    </>
  );
}

export default Mediaplayer;

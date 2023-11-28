import React from 'react';

import Slider from './Slider'

function PropsDelegationSliderComponent() {
  const [volume, setVolume] = React.useState(50);
  
  return (
    <main style={{
      width: "45%",
      height: "20vh",
      border: "thick double #32a1ce",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <Slider
        label="Volume"
        min={0}
        max={100}
        value={volume}
        onChange={(event) => {
          setVolume(event.target.value);
        }}
      />
    </main>
  );
}

export default PropsDelegationSliderComponent;

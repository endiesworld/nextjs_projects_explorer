import React from 'react';

import useToggle from './use-toggle';
import Toggle from './Toggle';
import style from './Toggle.module.css'

function ToggleComponents() {
  const [enableWifi, toggleEnableWifi] = useToggle(true);
  const [lowPowerMode, toggleLowPowerMode] = useToggle(false);
  
  return (
    <main className={style.main}>
      <Toggle
        label="Enable Wi-Fi"
        checked={enableWifi}
        onClick={toggleEnableWifi}
      />
      <Toggle
        className={style.green_toggle}
        label="Low Power Mode"
        checked={lowPowerMode}
        onClick={toggleLowPowerMode}
      />
    </main>
  );
}

export default ToggleComponents;

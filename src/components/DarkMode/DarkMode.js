import React from 'react';

import Toggle from './Toggle';

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    const storedValue = window.localStorage.getItem('is-dark-mode');
    return JSON.parse(storedValue) || false; });

  React.useEffect(
    ()=>{
      window.localStorage.setItem('is-dark-mode', isDarkMode);
    },
    [isDarkMode]
  )
  
  return (
    <div
      className="wrapper"
      style={{
        // NOTE: This is a just-for-fun mini demo, not a
        // full-featured Dark Mode implementation!
       
        '--color-bg': isDarkMode ? 'black' : 'white',
        '--color-text': isDarkMode ? 'white' : 'black',
      }}
    >
      <Toggle
        label="Dark Mode"
        checked={isDarkMode}
        handleToggle={setIsDarkMode}
      />
    </div>
  );
}

export default DarkMode;

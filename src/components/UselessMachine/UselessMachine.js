import React from 'react';
import './styles.css';

function UselessMachine() {
  const id = React.useId();
  const [isOn, setIsOn] = React.useState(true);

  React.useEffect(() => {
    // Ignore renders that happen because the
    // checkbox is flipped on. We only want to
    // respond when it's flipped *off*.
    if (isOn) {
      return;
    }

    // Flip the checkbox back on in 500ms...
    const timeoutId = window.setTimeout(() => {
      setIsOn(true);
    }, 500);

    return () => {
      // ...Unless the 'isOn' property changes
      // before that time has elapsed, OR the
      // component happens to unmount:
      window.clearTimeout(timeoutId);
    };
  }, [isOn]);

  return (
    <div className='useless-machine'>
      <input
        className='useless-machine-input'
        id={id}
        type="checkbox"
        checked={isOn}
        onChange={(event) => {
          setIsOn(event.target.checked);
        }}
      />
      
        <label htmlFor={id} style={{
          display: 'none' ,
        }}>Toggle checkbox</label>
      
    </div>
  );
}

export default UselessMachine;
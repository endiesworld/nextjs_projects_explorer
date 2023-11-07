import React from 'react';

function ResizeWindow() {
  const [
    windowDimensions,
    setWindowDimensions,
  ] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // with this approach, these codes will run on every render/rerender thus registering multiple events

  React.useEffect(()=>{
    function handleWindowResize(event){
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
 // 
  window.addEventListener("resize", handleWindowResize)
  }, [])
  
  
  return (
    <div className="wrapper">
      <p>
        {windowDimensions.width} / {windowDimensions.height}
      </p>
    </div>
  );
}

export default ResizeWindow;

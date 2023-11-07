import React from 'react';

function GlobalEvent() {
  const [
    mousePosition,
    setMousePosition
  ] = React.useState({ x: 0, y: 0 });
  
//   // with this approach, these codes will run on every render/rerender thus registering multiple events
//   function handleMouseMove(event){
//     setMousePosition({
//       x: event.clientX,
//       y: event.clientY,
//     });
//   }
//  // 
//   window.addEventListener("mousemove", handleMouseMove)

  React.useEffect(() => {
    // with this approach, these codes will run on every render/rerender thus registering multiple events
  function handleMouseMove(event){
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  }
 // 
  window.addEventListener("mousemove", handleMouseMove)
  }, [] // Provided that this dependency array is empty, useEffect will only run once, which is on the first case of render
  )
  
  return (
    <div className="wrapper"
      >
      <p>
        {mousePosition.x} / {mousePosition.y}
      </p>
    </div>
  );
}

export default GlobalEvent;

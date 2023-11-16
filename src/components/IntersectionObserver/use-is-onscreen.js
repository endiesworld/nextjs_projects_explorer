import React from 'react';

/*
Here's the “pure JS” version once again:

  function pureJsVersion() {
    const wrapperElement =
      document.querySelector('.some-class');
  
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
  
      // `entry.isIntersecting` will be true if the
      // element is in the viewport, false if not.
    });
  
    observer.observe(wrapperElement);
  }

To unsubscribe, you can call:

  observer.disconnect();
*/

function useIsOnscreen() {
  // TODO
  const [isOnscreen, setIsOnscreen] = React.useState(false) ;
  const comRef = React.useRef() ;

  React.useEffect(() =>{
    const wrapperElement = comRef.current;
  
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
  
      // `entry.isIntersecting` will be true if the
      // element is in the viewport, false if not.
      if (entry.isIntersecting) {
        // Show character
        setIsOnscreen(true)
        } else {
        // Hide character
        setIsOnscreen(false)
        }
    });
  
    observer.observe(wrapperElement);
    return () => {
      observer.disconnect();
    }
  },[])
  return [isOnscreen, comRef];
}

export default useIsOnscreen;
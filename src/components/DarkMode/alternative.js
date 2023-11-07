// Alternative solution?(info)
// Instead of using useEffect to track the changes in isDarkMode, we could also create a new setter function that tackles the local-storage write:
// import React from "react";

// function Alternative(){

//     const [isDarkMode, setIsDarkModeRaw] = React.useState(() => {
//     // ✂️ Same as my solution
//     });

//     function setIsDarkMode(newValue) {
//     setIsDarkModeRaw(newValue);
//     window.localStorage.setItem('is-dark-mode', newValue);
//     }

//     return <></>
// }
// Our new function, setIsDarkMode, “wraps around” the state-setter function we get from React. Whenever we call this function, we'll update the state and persist the result to localStorage.

// This is the approach suggested in the React docs, but personally, I prefer to use effects for this type of synchronization. Ultimately, however, both approaches are perfectly valid. 👍
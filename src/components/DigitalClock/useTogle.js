import React from 'react';


export default function useToggle(initValue = false){

    // If we were using typescript the below lines wonn't be needed
    if (
    typeof initValue !== 'boolean' &&
    typeof initValue !== 'function'
    ) {
        console.warn('Invalid type for useToggle');
    }

    const [value, setValue] = React.useState(initValue) ;

    function tuggleValue(){
        return setValue((currentValue) => !currentValue) ; // The setValue function when called by react recieves the current value by default
    }

    return [value, tuggleValue] ;
}
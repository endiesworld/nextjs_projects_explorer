import {useState} from 'react';
import './colorPicker.css'

function ColorPicker() {

    // const [colors, setColors] = useState([
    //     '#FFD500',
    //     '#FF0040',
    // ]);

    // const [pickerState, setpickerState] = useState(()=>colors)
    
    // const colorStops = colors.join(', ');
    // const backgroundImage = `linear-gradient(${colorStops})`;

    // return (
    //     <div className="wrapper">
    //     <div className="actions">
    //         <button onClick={ () => {
    //         let newColors = [...colors] ;
    //         if (newColors.length > 2){
    //             let nextpicker = [...pickerState]
    //             for (let i = 0; i < newColors.length; i++) {
    //                 nextpicker[i] = colors[i]
    //             }
    //             setpickerState(nextpicker);
    //             newColors.pop() ;
    //             setColors(newColors) ;
    //         }
            
    //         }}>
    //         Remove color
    //         </button>
    //         <button onClick={ () => {
    //             if (colors.length < 5){
    //                 if(pickerState.length > colors.length){
    //                     let newColors = [...colors];
    //                     let nextInt =  newColors.length ;
    //                     newColors.push(pickerState[nextInt]) ;
    //                     setColors(newColors) ;
    //                 }

    //                 else{
    //                     let newColors = [...colors, "#FF0000"] ;
    //                     setColors(newColors) ;
    //                 }
    //             }
    //         }} >
    //         Add color
    //         </button>
    //     </div>
        
    //     <div
    //         className="gradient-preview"
    //         style={{
    //         backgroundImage,
    //         }}
    //     />
        
    //     <div className="colors">
    //         {colors.map((color, index) => {
    //         const colorId = `color-${index}`;
    //         return (
    //             <div key={colorId} className="color-wrapper">
    //             <label htmlFor={colorId}>
    //                 Color {index + 1}:
    //             </label>
    //             <div className="input-wrapper">
    //                 <input
    //                 id={colorId}
    //                 type="color"
    //                 value={color}
    //                 onChange={ e => {
    //                     let newColorObject = [...colors] ;
    //                     newColorObject[index] = e.target.value ;
    //                     setColors(newColorObject) ;
    //                 }}
    //                 />
    //             </div>
    //             </div>
    //         );
    //         })}
    //     </div>
    //     </div>
    // );

        const [colors, setColors] = useState([
        '#FFD500',
        '#FF0040',
        '#FF0040',
        '#FF0040',
        '#FF0040',
    ]);
    const [
        numOfVisibleColors,
        setNumOfVisibleColors,
    ] = useState(2);

    const visibleColors = colors.slice(0, numOfVisibleColors);

    const colorStops = visibleColors.join(', ');
    const backgroundImage = `linear-gradient(${colorStops})`;

    function addColor() {
        if (numOfVisibleColors >= 5) {
        window.alert('There is a maximum of 5 colors');
        return;
        }

        setNumOfVisibleColors(numOfVisibleColors + 1);
    }

    function removeColor() {
        if (numOfVisibleColors <= 2) {
        window.alert('There is a minimum of 2 colors');
        return;
        }

        setNumOfVisibleColors(numOfVisibleColors - 1);
    }
    return (
        <div className="wrapper">
        <div className="actions">
            <button onClick={removeColor}>Remove color</button>
            <button onClick={addColor}>Add color</button>
        </div>

        <div
            className="gradient-preview"
            style={{
            backgroundImage,
            }}
        />

        <div className="colors">
            {visibleColors.map((color, index) => {
            const colorId = `color-${index}`;
            return (
                <div key={colorId} className="color-wrapper">
                <label htmlFor={colorId}>
                    Color {index + 1}:
                </label>
                <div className="input-wrapper">
                    <input
                    id={colorId}
                    type="color"
                    value={color}
                    onChange={(event) => {
                        const nextColors = [...colors];
                        nextColors[index] = event.target.value;

                        setColors(nextColors);
                    }}
                    />
                </div>
                </div>
            );
            })}
        </div>
        </div>
    );
}

export default ColorPicker;
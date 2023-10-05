import {useState} from 'react';
import './colorPicker.css'

function ColorPicker() {

    const [colors, setColors] = useState([
        '#FFD500',
        '#FF0040',
    ]);

    const [pickerState, setpickerState] = useState(()=>colors)
    
    const colorStops = colors.join(', ');
    const backgroundImage = `linear-gradient(${colorStops})`;

    return (
        <div className="wrapper">
        <div className="actions">
            <button onClick={ () => {
            let newColors = [...colors] ;
            if (newColors.length > 2){
                let nextpicker = [...pickerState]
                for (let i = 0; i < newColors.length; i++) {
                    nextpicker[i] = colors[i]
                }
                setpickerState(nextpicker);
                newColors.pop() ;
                setColors(newColors) ;
            }
            
            }}>
            Remove color
            </button>
            <button onClick={ () => {
                if (colors.length < 5){
                    if(pickerState.length > colors.length){
                        let newColors = [...colors];
                        let nextInt =  newColors.length ;
                        newColors.push(pickerState[nextInt]) ;
                        setColors(newColors) ;
                        console.log(newColors) ;
                        console.log(pickerState)
                    }

                    else{
                        let newColors = [...colors, "#FF0000"] ;
                        setColors(newColors) ;
                    }
                }
            }} >
            Add color
            </button>
        </div>
        
        <div
            className="gradient-preview"
            style={{
            backgroundImage,
            }}
        />
        
        <div className="colors">
            {colors.map((color, index) => {
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
                    onChange={ e => {
                        let newColorObject = [...colors] ;
                        newColorObject[index] = e.target.value ;
                        setColors(newColorObject) ;
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
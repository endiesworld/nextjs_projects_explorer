import React from 'react';

import GenerativeArt from './generativeArt';
import './generativeArtStyle.css'; 

function FormControl() {
    const [numOfLines, setNumOfLines] = React.useState(5);

    /*
        Accepted values:
        - basic
        - monochrome
        - froot-loops
        - spooky
    */
    const [colorTheme, setColorTheme] = React.useState('basic');

    /*
        Accepted values:
        - circles
        - polygons
    */
    const [shape, setShape] = React.useState('circles');
    
    return (
        <div className='art-parent-wrapper'>
        <GenerativeArt
            numOfLines={numOfLines}
            colorTheme={colorTheme}
            shape={shape}
        />
        
        <form className='art-form-input'>
            <fieldset>
            <legend>Controls</legend>
            <div className="row">
                <div className="col">
                <label
                    htmlFor="num-of-lines"
                    className="control-heading"
                >
                    Number of Lines:
                </label>
                <input
                    id="num-of-lines"
                    type="range"
                    min="1"
                    max="15"
                    value={numOfLines}
                    onChange={e => setNumOfLines( e.target.value)}
                />
                </div>
            </div>
            <div className="row">
                <div className="col">
                <label
                    className="control-heading"
                    htmlFor="color-theme"
                >
                    Color Theme:
                </label>
                <select 
                    id="color-theme"
                    value={colorTheme}
                    onChange = {
                    e => setColorTheme(e.target.value)
                    }>
                    <option value="basic">
                    Basic
                    </option>
                    <option value="monochrome">
                    Monochrome
                    </option>
                    <option value="froot-loops">
                    Froot Loops
                    </option>
                    <option value="spooky">
                    Spooky Night
                    </option>
                </select>
                </div>
                <div className="col">
                <div className="control-heading">
                    Shape:
                </div>
                <div className="radio-wrapper">
                    <div className="radio-option">
                    <input type="radio" 
                        value="circles"
                        checked={shape === "circles"}
                        onChange={event => {
                        setShape(event.target.value)
                    }}/>
                    <label>
                        Circles
                    </label>
                    </div>
                    <div className="radio-option">
                    <input type="radio" 
                        value="Polygons"
                        checked={shape === "Polygons"}
                        onChange={event => {
                        setShape(event.target.value)}}
                        />
                    <label>
                        Polygons
                    </label>
                    </div>
                </div>
                </div>
            </div>
            </fieldset>
        </form>
        </div>
    );
}

export default FormControl;
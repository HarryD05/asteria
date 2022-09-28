//Importing React Dependencies
import React, { useState, useEffect } from "react";

//Importing constants
import _ from "./../constants/constants";

import "./../styles/index.scss";

const SettingsContent = () => {
    const [fontSize, setFontSize] = useState(16);
    const [dyslexia, setDyslexia] = useState(0);
    const [firstUpdate, setFirstUpdate] = useState(true);


    useEffect(() => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }, []);

    useEffect(() => {
        if (firstUpdate) {
            if (localStorage.getItem('dyslexia') !== null) {
                if (localStorage.getItem('dyslexia') == 0) {
                    setDyslexia(0);
                    document.body.setAttribute('dyslexia', 0);
                    localStorage.setItem('dyslexia', 0);
                } else {
                    setDyslexia(1);
                    document.body.setAttribute('dyslexia', 1);
                    localStorage.setItem('dyslexia', 1);
                }
            } else {
                setDyslexia(0);
                document.body.setAttribute('dyslexia', 0);
                localStorage.setItem('dyslexia', 0);
            }

            if (localStorage.getItem('font-size') !== null) {
                setFontSize(localStorage.getItem('font-size'));
                document.body.setAttribute('font-size', localStorage.getItem('font-size'));
                localStorage.setItem('font-size', localStorage.getItem('font-size'));
            } else {
                setFontSize(16);
                document.body.setAttribute('font-size', 16);
                localStorage.setItem('font-size', 16);
            }

            setFirstUpdate(false);
        } else {
            document.body.setAttribute('font-size', fontSize);
            localStorage.setItem('font-size', fontSize);
            document.body.setAttribute('dyslexia', dyslexia ? 1 : 0);
            localStorage.setItem('dyslexia', dyslexia ? 1 : 0);
        }

        
        
    }, [fontSize, dyslexia])

    return (
        <>
            <button type="button" onClick={() => {
                setFontSize(16);
                setDyslexia(0);
            }}>Reset to default</button>

            <p>Dyslexia friendly mode</p>

            <label class="switch">
                <input type="checkbox" checked={dyslexia} onChange={e => setDyslexia(e.target.checked)}></input>
                <span class="switchSlider round"></span>
            </label>

            <p>Article font size</p>

            <input type="range" min={12} max={28} step={4} value={fontSize} onChange={e => setFontSize(e.target.value)}></input>

            <div className="example"><p>Example text</p></div>

            
        </>
    )
}


export default SettingsContent;
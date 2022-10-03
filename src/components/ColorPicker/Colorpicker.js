import React from 'react';
import "./Colorpicker.css";

import {BlockPicker} from "react-color";
import Tippy from "@tippyjs/react";
import SettingsIcon from '@material-ui/icons/Settings';



function Colorpicker() {

    const changeColor = (color) => {
        document.documentElement.style.setProperty('--component-color',color.hex);
        }
    const resetColor = ()=> {
        document.documentElement.style.setProperty('--component-color',"#ffc500");
        }
    return (
        <div className="color__picker">
           

            <Tippy interactive={true}
            placement={"auto"}
            content={ <div className="main"><BlockPicker 
                onChangeComplete={color => changeColor(color)}
                />
                <button className="btn-reset" onClick={resetColor}>Reset</button>
                </div>}
            >
                <button className="button" ><SettingsIcon className="setting__icon"/></button>
            </Tippy>
            
        </div>
    )
}

export default Colorpicker

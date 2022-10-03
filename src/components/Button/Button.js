import React from 'react'
import "./Button.css";
import {Button} from '@material-ui/core';

function CustomButton({ text, icon}) {
    return (
            <Button className="btn" endIcon={icon ? <div className="btnIcon__container">{icon}</div>: null}>
                <span className="btn__text">{text}</span>
            </Button>
    );
};

export default CustomButton;

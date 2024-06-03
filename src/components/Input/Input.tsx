import React, { InputHTMLAttributes } from "react";

import './Input.styles.scss';

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label?: string;
    grouped?: boolean;
    sizeX?: string;
    colorTitle?: string;
    sizeFont?: number
}

const Input: React.FC<IInput> = ({label, name, grouped = false, colorTitle, sizeX, sizeFont, ...rest}) => {

    return (
        <div className={grouped ? "input-block input-block-margin-none" : "input-block"}>
            {label && <label style={{color: colorTitle ? colorTitle : "#E6E6F0", fontSize: sizeFont}} htmlFor={name}>{label}</label>}
            <input id={name} {...rest} style={{width: sizeX, fontSize: sizeFont}}/>
        </div>
    );
}

export default Input;
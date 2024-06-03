import React, { SelectHTMLAttributes } from "react";

import './Select.styles.scss';

interface iSelect extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
    colorLabel?: string;
    sizeFont?: number
}

const Select: React.FC<iSelect> = ({label, name, options, colorLabel,sizeFont, ...rest}) => {
    return (
        <div className="Select">
            <label htmlFor={name} style={{color: colorLabel, fontSize: sizeFont}}>{label}</label>
            <select id={name} {...rest} style={{fontSize: sizeFont}}>
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
        </div>
    );
}

export default Select;
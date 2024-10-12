import React from 'react';
import Style from './Input.module.css';
const { inputStyle } = Style;

type TInput = {
    type: string,
    placeholder?: string,
    style?: React.CSSProperties,
    onFocus?: () => void
}
const Input = ({ type, placeholder, style, onFocus }: TInput) => {
    return <input type={type} style={style} onFocus={onFocus} className={inputStyle} placeholder={placeholder} />
}

export default Input
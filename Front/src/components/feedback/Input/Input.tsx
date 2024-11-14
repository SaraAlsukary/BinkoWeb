import React from 'react';
import Style from './Input.module.css';
const { inputStyle } = Style;

type TInput = {
    type: string,
    placeholder?: string,
    style?: React.CSSProperties,
    value?: string
    onFocus?: () => void
    onChange?: (e: any) => void
}
const Input = ({ value, type, placeholder, style, onFocus, onChange }: TInput) => {
    return <input value={value} type={type} style={style} onChange={onChange} onFocus={onFocus} className={inputStyle} placeholder={placeholder} />
}

export default Input
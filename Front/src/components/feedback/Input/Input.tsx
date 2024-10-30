import React from 'react';
import Style from './Input.module.css';
import { useAppSelector } from '@hooks/app';
const { inputStyle, arabic, english } = Style;

type TInput = {
    type: string,
    placeholder?: string,
    style?: React.CSSProperties,
    value?: string
    onFocus?: () => void
    onChange?: (e: any) => void
}
const Input = ({ value, type, placeholder, style, onFocus, onChange }: TInput) => {
    const language = useAppSelector(state => state.language.language)
    return <input value={value} type={type} style={style} onChange={onChange} onFocus={onFocus} className={language === 'English' ? `${inputStyle} ${english}` : `${inputStyle} ${arabic}`} placeholder={placeholder} />
}

export default Input
import { useAppSelector } from '@hooks/app';
import Style from './Button.module.css';
const { buttonStyle, arabic, english } = Style;

type TButton = {
    children: React.ReactNode,
    style?: React.CSSProperties,
    className?: string
}
const Button = ({ children, style, className }: TButton) => {
    const language = useAppSelector(state => state.language.language);
    return (
        <button style={style} className={language === 'Arabic' ? `${arabic} ${buttonStyle} ${className}` : `${english} ${buttonStyle} ${className}`}>{children}</button>
    )
}

export default Button

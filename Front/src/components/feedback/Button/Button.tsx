import { useAppSelector } from '@hooks/app';
import Style from './Button.module.css';
const { buttonStyle, arabic, english } = Style;

type TButton = {
    children: React.ReactNode,
    style?: React.CSSProperties,
    className?: string,
    disabled?: boolean,
    onClick?: () => void
}
const Button = ({ children, style, className, onClick, disabled }: TButton) => {
    const language = useAppSelector(state => state.language.language);
    return (
        <button disabled={disabled} onClick={onClick} style={style} className={language === 'Arabic' ? `${arabic} ${buttonStyle} ${className}` : `${english} ${buttonStyle} ${className}`}>{children}</button>
    )
}

export default Button

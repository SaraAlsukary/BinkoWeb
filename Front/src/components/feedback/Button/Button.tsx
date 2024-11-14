import Style from './Button.module.css';
const { buttonStyle } = Style;

type TButton = {
    children: React.ReactNode,
    style?: React.CSSProperties,
    className?: string,
    disabled?: boolean,
    onClick?: () => void
}
const Button = ({ children, style, className, onClick, disabled }: TButton) => {
    return (
        <button disabled={disabled} onClick={onClick} style={style} className={` ${buttonStyle} ${className}`}>{children}</button>
    )
}

export default Button

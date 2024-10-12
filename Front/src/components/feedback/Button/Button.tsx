import Style from './Button.module.css';
const { buttonStyle } = Style;

type TButton = {
    children: React.ReactNode,
    style?: React.CSSProperties,
    className?: string
}
const Button = ({ children, style, className }: TButton) => {
    return (
        <button style={style} className={`${buttonStyle} ${className}`}>{children}</button>
    )
}

export default Button

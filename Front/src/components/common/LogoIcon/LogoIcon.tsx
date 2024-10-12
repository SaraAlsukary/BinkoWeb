import logo from '@assets/imgs/logo.png'
import { TLanguage } from '@types'
import style from './LogoIcon.module.css';
const { arabic, english } = style
const LogoIcon = ({ language }: TLanguage) => {
    return (
        <img className={language === 'Arabic' ? `${arabic}` : `${english}`} src={logo} alt="logo" />
    )
}

export default LogoIcon

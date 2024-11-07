import LogoIcon from '../LogoIcon/LogoIcon';
import Styles from './Header.module.css';
import Moon from '@assets/svgs/moon.svg?react';
import BurgerBlack from '@assets/svgs/burgerMenuBlack.svg?react';
import BurgerWhite from '@assets/svgs/burgerMenuWhite.svg?react';
import Search from '@components/feedback/Search/Search';
// import Search from '@assets/svgs/search.svg?react';
import SearchGreen from '@assets/svgs/searchGreen.svg?react';
import { changeThemeToDark, changeThemeToLight } from '@store/themeSlice/themeSlice'
import Sun from '@assets/svgs/sun.svg?react'
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@components/feedback';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/app';
import { changeLanguageToArabic, changeLanguageToEnglish } from '@store/languageSlice/languageSlice';
import { Container } from 'react-bootstrap';
const { headerContainer, searchIcon, navStyle, prof, burger, show, dark, arabicNav, englishNav, icon, arabic, english, arabicBurger, englishBurger } = Styles;
const Header = () => {
    const [toggle, setToggle] = useState(false);
    const dispatch = useAppDispatch();
    const { theme } = useAppSelector(state => state.theme);
    const { language } = useAppSelector(state => state.language);
    const { authState } = useAppSelector(state => state.auth)
    const location: any = useLocation();
    const showToggleHandler = () => {
        setToggle(!toggle);
    }
    const changeToDark = () => {
        dispatch(changeThemeToDark());
        document.body.style.backgroundColor = 'var(--main-bg-dark-color)';
        document.body.style.color = '#fff';
    }
    const changeToLight = () => {
        dispatch(changeThemeToLight())
        document.body.style.backgroundColor = 'var(--main-bg-light-color)';
        document.body.style.color = '#000';
    }
    const changeToEnglish = () => {
        dispatch(changeLanguageToEnglish());
        document.body.style.direction = 'ltr';


    }

    const changeToArabic = () => {
        dispatch(changeLanguageToArabic());
        document.body.style.direction = 'rtl';
    }
    const changeThemeColor = () => {
        if (theme === 'Dark') {
            document.body.style.backgroundColor = 'var(--main-bg-dark-color)';
            document.body.style.color = '#fff';
        } else {
            document.body.style.backgroundColor = 'var(--main-bg-light-color)';
            document.body.style.color = '#000';
        }
    }
    const changeLanguage = () => {
        if (language === 'English') {
            document.body.style.direction = 'ltr';
            document.body.style.fontFamily = 'BinkoEng';
        } else {
            document.body.style.direction = 'rtl';
            document.body.style.fontFamily = 'BinkoAra';


        }
    }
    changeLanguage();
    changeThemeColor();
    return (
        <header >
            <Container className={theme === 'Light' ? `${headerContainer}` : `${headerContainer} ${dark}`} >
                <div className={language === 'Arabic' ? `${arabic} ${icon}` : `${english} ${icon}`}><NavLink to='/'> <LogoIcon language={language} /></NavLink></div>
                <Search className="showInput" isThereNavigate={true} checkLocate={location.pathname === '/booksSearch' ? true : false} />

                <nav className={language === 'Arabic' ? `${navStyle} ${arabic} ` : `${navStyle} ${english} `} >
                    <ul className={toggle && language === 'Arabic' && theme === 'Dark' ? `${show} ${dark} ${arabicNav} ` : toggle && language === 'Arabic' && theme === 'Light' ? `${show} ${arabicNav} ` : toggle && language === 'English' && theme === 'Dark' ? ` ${show} ${dark} ${englishNav} ` : toggle && language === 'English' && theme === 'Light' ? ` ${show} ${englishNav} ` : ''}>
                        {theme === 'Light' ? <li onClick={changeToDark}>
                            <Moon style={{ width: '30px', height: '30px', cursor: 'pointer' }} /></li> :
                            <li className={theme === 'Dark' ? `${dark}` : ''} onClick={changeToLight}><Sun style={{ width: '30px', cursor: 'pointer', height: '30px' }} /></li>}
                        <li className={theme === 'Dark' ? `${dark}` : ''} ><NavLink to='booksSearch' className={theme === 'Dark' ? `dark` : `light`} >
                            <div className={language === 'Arabic' ? `${arabic} ${show} ${searchIcon}` : `${english} ${show} ${searchIcon}`}>
                                <SearchGreen style={language === 'Arabic' ? { width: '100%', height: '100%', position: 'absolute', right: '0' } : {
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    left: "0"
                                }} />
                            </div>
                        </NavLink></li>
                        <li className={theme === 'Dark' ? `${dark}` : ''} ><NavLink to='/' className={theme === 'Dark' ? `dark` : `light`} >{language === 'English' ? 'Home' : 'الرئيسية'}</NavLink></li>
                        <li className={theme === 'Dark' ? `${dark}` : ''}><NavLink to='news' className={theme === 'Dark' ? `dark` : `light`}  >{language === 'English' ? 'News' : 'الأخبار'}</NavLink></li>
                        <li className={theme === 'Dark' ? `${dark}` : ''}><NavLink to='categories' className={theme === 'Dark' ? `dark` : `light`} >{language === 'English' ? 'Categories' : 'التصنيفات'}</NavLink></li>
                        <li className={theme === 'Dark' ? `${dark}` : ''} ><NavLink to='about' className={theme === 'Dark' ? `dark` : `light`} >{language === 'English' ? 'About' : 'عنا'}</NavLink></li>


                        <li className={theme === 'Dark' ? `${dark}` : ''}>
                            <select onChange={(e) => { e.target.size = 1; e.target.blur() }} onBlur={(e) => { e.target.size = 0 }} onFocus={(e) => { e.target.size = 2 }} name="language" value={language === "Arabic" ? "العربية" : "English"} style={theme === 'Dark' ? { color: 'white' } : { color: 'black' }}>
                                <option value="Arabic" onClick={changeToArabic}>{language === 'English' ? 'Arabic' : 'العربية'}</option>
                                <option value="English" onClick={changeToEnglish}>{language === 'English' ? 'English' : 'الانجليزية'} </option>
                            </select>
                        </li>
                        {authState ?
                            <li><NavLink to='profile' ><div className={theme === 'Dark' ? `${prof} ${dark}` : `${prof}`}></div></NavLink></li>

                            : <li><Button ><NavLink to='Login' style={{ color: 'black' }}>{language === 'Arabic' ? 'تسجبل الدخول' : "login"}</NavLink></Button></li>
                        }</ul>


                </nav >
                {theme === 'Light' ?
                    <div className={language === 'Arabic' ? ` ${arabicBurger} ${burger}` : ` ${burger} ${englishBurger}`}
                        onClick={showToggleHandler}>
                        <BurgerBlack style={{ width: '100%' }} />
                    </div>
                    : <div className={language === 'Arabic' ? ` ${arabicBurger} ${burger}` : ` ${burger} ${englishBurger}`}
                        onClick={showToggleHandler}>
                        <BurgerWhite style={{ width: '100%' }} />
                    </div>
                }
            </Container>
        </header >
    )
}

export default Header

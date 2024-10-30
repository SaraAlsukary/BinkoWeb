import { Container } from 'react-bootstrap';
import styles from './Footer.module.css';
import { useAppSelector } from '@hooks/app';
const { footerContainer, dark } = styles;
const Footer = () => {
    const { theme } = useAppSelector(state => state.theme);
    const { language } = useAppSelector(state => state.language);
    return (
        <Container >
            <footer className={theme === 'Dark' ? `${footerContainer} ${dark} ` : `${footerContainer}`}>
                <p><span>Binko</span> &copy; {language === 'English' ? ` All Rights Reserved 2025` : `جميع الحقوق محفوظة 2025`}</p>
            </footer>
        </Container >
    )
}

export default Footer

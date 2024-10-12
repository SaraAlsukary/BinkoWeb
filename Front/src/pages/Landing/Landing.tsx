import LottieHandler from '@components/feedback/lottieHandler/lottieHandler';
import Style from './Landing.module.css';
import { Button } from '@components/feedback';
import { Container } from 'react-bootstrap';
import { useAppSelector } from '@hooks/app';

const { landing, left, right, para, mobile, arabic, english } = Style;
const Landing = () => {
    const language = useAppSelector(state => state.language.language);
    return (
        <div>
            <Container className={landing}>
                <div className={left}>
                    <p className={language === 'Arabic' ? `${para} ${mobile}` : `${mobile}`} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quasi porro amet minima inventore aliquam sit itaque soluta quaerat quidem in vero possimus officiis, ullam sed totam id iusto velit.</p>
                    <Button className={language === 'Arabic' ? `${arabic} ${mobile}` : `${english} ${mobile}`} >{language === 'Arabic' ? 'تصفح' : "let's go"}</Button>
                </div>
                <div className={right}>
                    <LottieHandler loop={false} type={'girl'} />
                </div>
            </Container >
        </div >
    )
}

export default Landing

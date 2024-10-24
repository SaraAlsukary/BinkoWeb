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
                    <p className={language === 'Arabic' ? `${para} ${arabic} ${mobile}` : `${mobile} ${english}`} >
                        {language === 'English' ? 'Binko is a storytelling community, Where you can discover original stories and books, Also it is a very beautiful place where you can activate with other authors by your opinoin, What are you waiting, Go make your dream book!'
                            : " بينكو هو مجتمع لسرد القصص، حيث يمكنك اكتشاف القصص والكتب الأصلية، كما أنه مكان جميل جدًا حيث يمكنك التفاعل مع مؤلفين آخرين من خلال رأيك، ماذا تنتظر، اذهب واصنع كتاب أحلامك!"}</p>
                    <Button className={language === 'Arabic' ? `${arabic} ${mobile}` : `${english} ${mobile}`} >{language === 'Arabic' ? 'تصفح' : "let's go"}</Button>
                </div>
                <div className={right}>
                    <LottieHandler loop={false} type={'girl'} style={{ width: '400px' }} />
                </div>

            </Container >
        </div >
    )
}

export default Landing

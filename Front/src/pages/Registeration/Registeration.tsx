import { Input } from "@components/feedback"
import LottieHandler from "@components/feedback/lottieHandler/lottieHandler"
import { useAppSelector } from "@hooks/app"
import style from './Registeration.module.css';
import { Container } from "react-bootstrap";
const { book, bookReg, register, bottom, regInput } = style
const Registeration = () => {
    const language = useAppSelector(state => state.language.language);
    return (
        <div >
            <Container className={register}>
                <div className={bookReg}>
                    <div className={book}>
                        <LottieHandler type="flyingBook" loop={true} style={{ width: '300px' }} />
                    </div>
                    <div className={bottom}>
                        <div className={regInput}>
                            <Input placeholder={language === 'English' ? 'Username' : 'اسم المستخدم'} type="text" />

                        </div>
                        <div className={regInput}>
                            <Input placeholder={language === 'English' ? 'Email' : ' الايميل'} type="email" />

                        </div>
                        <div className={regInput}>
                            <Input placeholder={language === 'English' ? 'Password' : 'كلمة المرور'} type="password" />
                        </div>
                        <div className={regInput}>
                            <Input placeholder={language === 'English' ? 'Confirm Password' : ' تأكيد كلمة المرور'} type="password" />

                        </div>
                        <div className={regInput}>
                            <Input style={{ backgroundColor: 'var(--secondary-color)' }} value={language === 'English' ? 'Register' : 'تسجيل'} type="submit" />
                        </div>


                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Registeration


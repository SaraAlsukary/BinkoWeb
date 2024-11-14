import { Input } from "@components/feedback"
import LottieHandler from "@components/feedback/lottieHandler/lottieHandler"
import { useAppSelector } from "@hooks/app"
import style from './Login.module.css';
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const { book, bookReg, register, bottom, regInput, account, forgot } = style
const Login = () => {
    const language = useAppSelector(state => state.language.language);
    const navigate = useNavigate();
    return (
        <div >
            <Container className={register}>
                <div className={bookReg}>
                    <div className={book}>
                        <LottieHandler type="flyingBook" loop={true} style={{ width: '300px' }} />
                    </div>
                    <div className={bottom}>
                        <div className={regInput}>
                            <Input placeholder={language === 'English' ? 'Username or Email' : '  اسم المستخدم أو الايميل'} type="text" /></div>
                        <div className={regInput}>
                            <Input placeholder={language === 'English' ? 'Password' : 'كلمة المرور'} type="password" />
                        </div>
                        <p className={forgot}>{language === 'English' ? 'Forgot Password?' : 'نسيت كلمة المرور؟'}</p>
                        <div className={regInput}>
                            <Input style={{ backgroundColor: 'var(--secondary-color)' }} value={language === 'English' ? 'Login' : 'تسجيل'} type="submit" />
                        </div>

                        <p onClick={() => navigate('/Binko/registration')} className={account}>{language === 'English' ? 'Create a new account' : ' انشاء حساب جديد'}</p>

                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Login

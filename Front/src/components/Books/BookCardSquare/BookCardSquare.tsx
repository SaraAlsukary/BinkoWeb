import styles from './BookCardSquare.module.css';
import { Button } from '@components/feedback';
import { TBooks } from '@customtypes/booksType';
import { useAppSelector } from '@hooks/app';
import { useNavigate } from 'react-router-dom';
const { pic, text, booCard } = styles

const BookCardSquare = ({ img, Author, title, desc, id }: TBooks) => {
    const navigate = useNavigate();
    const { language } = useAppSelector(state => state.language);
    return (
        <div onClick={() => navigate(`${id}`)} className={booCard} >
            <div className={pic}>
                <img src={img} alt="" />
            </div>
            <div className={text}>
                <h3>{title}</h3>
                <span>{Author}</span>
                <p>{desc}</p>
                <Button>
                    {language === 'Arabic' ? 'قراءة' : 'Read'}
                </Button >
            </div>
        </div>
    )
}

export default BookCardSquare

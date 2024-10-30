import styles from './BookCardSquare.module.css';
import { Button } from '@components/feedback';
import { TBooks } from '@customtypes/booksType';
import { useAppSelector } from '@hooks/app';
import { useNavigate } from 'react-router-dom';
const { pic, text, booCard, arabic } = styles

const BookCardSquare = ({ img, Author, title, desc, id }: TBooks) => {
    const { language } = useAppSelector(state => state.language);
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`${id}`)} className={language === 'English' ? `${booCard}` : `${booCard} ${arabic}`} >
            <div className={pic}>
                <img src={img} alt="" />
            </div>
            <div className={text}>
                <h3>{title}</h3>
                <span>{Author}</span>
                <p>{desc}</p>
                <Button>
                    Read
                </Button >
            </div>
        </div>
    )
}

export default BookCardSquare

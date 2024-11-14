import { Button } from '@components/feedback';
import styles from './BookCard.module.css';
import { TBooks } from '@customtypes/booksType';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@hooks/app';
const { pic, text, paraga, info, btnCard, booCard } = styles;
const BookCard = ({ img, desc, Author, title, id }: TBooks) => {
    const navigate = useNavigate();
    const { language } = useAppSelector(state => state.language);

    return (
        <div className={booCard} >
            <div className={pic}>
                <img src={img} alt="" />
            </div>
            <div className={text}>
                <div onClick={() => navigate(`${id}`)} className={paraga}>
                    <h3>{title}</h3>
                    <span>{Author}</span>
                    <p>{desc}</p>
                    <div className={btnCard}>
                        <Button>
                            {language === 'Arabic' ? 'قراءة' : 'Read'}
                        </Button >
                    </div>
                </div>
                <div className={info}>
                    <h3>{title}</h3>
                    <span>{Author}</span>
                    <div className={btnCard}>
                        <Button>
                            {language === 'Arabic' ? 'قراءة' : 'Read'}
                        </Button >
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BookCard

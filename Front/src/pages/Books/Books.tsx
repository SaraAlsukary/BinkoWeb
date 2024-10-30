import BookCard from '@components/Books/BookCard/BookCard';
import styles from './Books.module.css';
import { Container } from 'react-bootstrap';
import BookCardSquare from '@components/Books/BookCardSquare/BookCardSquare';
import { settingsBackground, settingsBox, settingsSquare } from '@utils/settingsForSlick';

import BooksBackground from '@components/Books/BooksBackground/BooksBackground';
import BookCardList from '@components/Books/BookCardList/BookCardList';
import HeadingTitle from '@components/feedback/HeadingTitle/HeadingTitle';
import { useAppSelector } from '@hooks/app';
import image from '@assets/imgs/s.jpg';
import './BooksSlider.css'
const { bookContainer, box, square } = styles;

const Books = () => {
    const { books } = useAppSelector(state => state);
    const { language } = useAppSelector(state => state.language);
    const booksCards = books.map((book => <BookCard key={book.id} {...book} />))
    const booksCardsSquare = books.map((book => <BookCardSquare key={book.id} {...book} />));
    const booksCardsBackground = books.map((book => <BooksBackground key={book.id} img={image} />));
    return (

        <Container>
            <div className={bookContainer}>

                <BookCardList settings={settingsBackground} type={square}>
                    {booksCardsBackground}
                </BookCardList>
                <HeadingTitle>{language === 'English' ? 'Fantasy' : 'فنتازيا'}</HeadingTitle>
                <BookCardList settings={settingsBox} type={box}>
                    {booksCards}
                </BookCardList>
                <BookCardList settings={settingsBackground} type={square}>
                    {booksCardsBackground}
                </BookCardList>
                <HeadingTitle>{language === 'English' ? 'Action' : 'أكشن'}</HeadingTitle>

                <BookCardList settings={settingsSquare} type={square}>
                    {booksCardsSquare}
                </BookCardList>

            </div >
        </Container>
    )
}

export default Books

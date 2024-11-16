import { Container } from "react-bootstrap"
import Styles from './AddBooks.module.css';
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/app";
import SecondaryButton from "@components/feedback/SecondaryButton/SecondaryButton";
import SecondaryInput from "@components/feedback/SecondaryInput/SecondaryInput";
import { addBook } from "@store/addBookSlice/addBookSlice";

const { addBooksContainer, cont, controlBtn, input, pic, img, bookInfo, } = Styles;
const AddBook = () => {
    const [imageFile, setImageFile] = useState('');
    const [file, setFile] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const dispatch = useAppDispatch();
    const { language } = useAppSelector(state => state.language);
    const { books } = useAppSelector(state => state.addBook);
    const data = {
        file: imageFile,
        title,
        desc
    }
    console.log(books);

    const titleHandler = (e: any) => {
        setTitle(e.target.value);
    }
    const descHandler = (e: any) => {
        setDesc(e.target.value);
    }
    const imageHandler = (e: any) => {
        setFile(URL.createObjectURL(e.target.files[0]));
        setImageFile(e.target.files[0]);
    }
    const addBookToMem = (data: Object) => {
        dispatch(addBook(data));
    }
    return (
        <div className={addBooksContainer}>
            <Container className={cont}>
                <div className={bookInfo}>
                    <div className={pic}>
                        <h2>{language === "English" ? "Add Image:" : "أضف صورة:"}</h2>
                        <input id="img" type="file" onChange={imageHandler} />
                        <label htmlFor="img">
                            <div className={img}>
                                <img src={file} />
                                <label htmlFor="img">
                                    <span>+</span>
                                </label>

                            </div>
                        </label>
                    </div>
                    <div className={input}>
                        <SecondaryInput onChange={titleHandler} type="text" placeholder={language === 'English' ? "Book Title" : "عنوان الكتاب"} />
                        <textarea name="" id="" onChange={descHandler} placeholder={language === 'English' ? "Book description" : "وصف الكتاب"} ></textarea>
                    </div>
                </div>
                <div className={controlBtn}>
                    <SecondaryButton onClick={() => addBookToMem(data)}>{language === 'English' ? 'Save' : 'حفظ'}</SecondaryButton>
                    <SecondaryButton>{language === 'English' ? 'Publish' : 'نشر'}</SecondaryButton>
                </div>
            </Container>
        </div >
    )
}

export default AddBook

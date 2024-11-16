import { Col, Container, Row } from "react-bootstrap"
import Styles from './AddChapter.module.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/app";
import SecondaryButton from "@components/feedback/SecondaryButton/SecondaryButton";
import SecondaryInput from "@components/feedback/SecondaryInput/SecondaryInput";
import { addChapter } from "@store/addChapterSlice/addChapterSlice";
const modules = {
    toolbar: [
        [{
            header: [1, 2, 3, 4, 5, 6, false],

        }],
        [{ font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
    ]
}
const { addBooksContainer, cont, rows, editors, editorInput, controlBtn, input } = Styles;
const AddChapter = () => {
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const { language } = useAppSelector(state => state.language);
    const dispatch = useAppDispatch();
    const data: Object = {
        title,
        value
    }
    const titleHandler = (e: any) => {
        setTitle(e.target.value);
    }

    const addChapterToMem = (data: Object) => {
        dispatch(addChapter(data))
    }
    return (
        <div className={addBooksContainer}>
            <Container className={cont}>
                <div className={input}>
                    <SecondaryInput onChange={titleHandler} type="text" placeholder={language === 'English' ? "Chapter Title" : "عنوان الفصل"} />
                </div>                <Row className={rows}>
                    <Col className={editors}>
                        <ReactQuill className={editorInput} modules={modules}
                            theme="snow" value={value} onChange={setValue} />
                        {/* <div className={contentText} dangerouslySetInnerHTML={{ __html: value }} /> */}
                    </Col>
                </Row>
                <div className={controlBtn}>
                    <SecondaryButton onClick={() => addChapterToMem(data)}>{language === 'English' ? 'Save' : 'حفظ'}</SecondaryButton>
                    <SecondaryButton>{language === 'English' ? 'Publish' : 'نشر'}</SecondaryButton>
                </div>
            </Container>
        </div>
    )
}

export default AddChapter

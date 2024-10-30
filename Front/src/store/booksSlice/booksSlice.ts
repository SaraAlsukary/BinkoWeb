import { createSlice } from "@reduxjs/toolkit";
import bookImage from '@assets/imgs/books/olivertwist.jfif'

const initialState = [{
    id: 2,
    title: 'OLiver Twist',
    Author: 'Charles Deckenes',
    img: bookImage,
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Asperiores, aperiam beata...'
}, {
    id: 3,
    title: 'OLiver Twist',
    Author: 'Charles Deckenes',
    img: bookImage,
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Asperiores, aperiam beata...'
}, {
    id: 4,
    title: 'OLiver Twist',
    Author: 'Charles Deckenes',
    img: bookImage,
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Asperiores, aperiam beata...'
}, {
    id: 5,
    title: 'OLiver Twist',
    Author: 'Charles Deckenes',
    img: bookImage,
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Asperiores, aperiam beata...'
}, {
    id: 6,
    title: 'OLiver Twist',
    Author: 'Charles Deckenes',
    img: bookImage,
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Asperiores, aperiam beata...'
}, {
    id: 7,
    title: 'OLiver Twist',
    Author: 'Charles Deckenes',
    img: bookImage,
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Asperiores, aperiam beata...'
}, {
    id: 8,
    title: 'OLiver Twist',
    Author: 'Charles Deckenes',
    img: bookImage,
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Asperiores, aperiam beata...'
}, {
    id: 9,
    title: 'OLiver Twist',
    Author: 'Charles Deckenes',
    img: bookImage,
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Asperiores, aperiam beata...'
}];

const books = createSlice({
    name: 'books',
    initialState,
    reducers: {}

})

export default books.reducer
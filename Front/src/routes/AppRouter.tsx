import SuspendPage from '@components/feedback/SuspendPage/SuspendPage';
import { useAppSelector } from '@hooks/app';
import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const HomePage = lazy(() => import('src/HomePage'));
const Categories = lazy(() => import('@pages/Categories/Categories'));
const About = lazy(() => import('@pages/About/About'));
const Login = lazy(() => import('@pages/Login/Login'));
const News = lazy(() => import('@pages/News/News'));
const Registeration = lazy(() => import('@pages/Registeration/Registeration'));
const Books = lazy(() => import('@pages/Books/Books'));
const BooksInfo = lazy(() => import('@pages/BooksInfo/BooksInfo'));
const AddBook = lazy(() => import('@pages/AddBook/AddBook'));
const Favorite = lazy(() => import('@pages/Favorite/Favorite'));
const Profile = lazy(() => import('@pages/Profile/Profile'));
const Settings = lazy(() => import('@pages/Settings/Settings'));
const Chapters = lazy(() => import('@pages/Chapters/Chapters'));
const BooksSearch = lazy(() => import('@pages/BooksSearch/BooksSearch'));
const Home = lazy(() => import('@pages/Home/Home'));


const AppRouter = () => {
    const { theme } = useAppSelector(state => state.theme);
    const { language } = useAppSelector(state => state.language);
    document.body.dataset.theme = theme;
    document.body.dataset.lang = language;
    const router = createBrowserRouter([{
        path: '/Binko',
        element: <SuspendPage ><HomePage /></SuspendPage>,
        children: [{
            index: true, element: <Home />,
        }, {
            path: '/Binko/home',
            element: <SuspendPage> <Home /></SuspendPage>
        },
        {
            path: 'booksSearch',
            element: <SuspendPage><BooksSearch /></SuspendPage>
        },
        {
            path: 'categories',
            element: <SuspendPage><Categories /></SuspendPage>
        }, {
            path: 'news',
            element: <SuspendPage> <News /></SuspendPage>
        },
        {
            path: 'login',
            element: <SuspendPage><Login /></SuspendPage>
        }, {
            path: "registration",
            element: <SuspendPage><Registeration /></SuspendPage>
        }, {
            path: 'about',
            element: <SuspendPage><About /></SuspendPage>
        }, {
            path: 'profile',
            element: <SuspendPage><Profile /></SuspendPage>
        },
        {
            path: 'settings',
            element: <SuspendPage><Settings /></SuspendPage>
        },
        {
            path: 'addBook',
            element: <SuspendPage><AddBook /></SuspendPage>
        },
        {
            path: 'favorite',
            element: <SuspendPage><Favorite /></SuspendPage>
        }, {
            path: 'books',
            element: <SuspendPage><Books /></SuspendPage>,
        },
        {
            path: 'books/:id',
            element: <SuspendPage><BooksInfo /></SuspendPage>,
        },
        {
            path: 'books/:id/:idChapter',
            element: <SuspendPage><Chapters /></SuspendPage>,
        }

        ]

    }])
    return <RouterProvider router={router} />
}

export default AppRouter;

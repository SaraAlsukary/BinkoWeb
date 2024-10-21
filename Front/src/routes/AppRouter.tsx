import SuspendPage from '@components/feedback/SuspendPage/SuspendPage';
import { AddBook, Favorite, Profile, Settings } from '@pages/index';
import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const HomePage = lazy(() => import('src/HomePage'));
const Categories = lazy(() => import('@pages/Categories/Categories'));
const About = lazy(() => import('@pages/About/About'));
const Landing = lazy(() => import('@pages/Landing/Landing'));
const Login = lazy(() => import('@pages/Login/Login'));
const News = lazy(() => import('@pages/News/News'));
const Registeration = lazy(() => import('@pages/Registeration/Registeration'));


const AppRouter = () => {
    const router = createBrowserRouter([{
        path: '/',
        element: <SuspendPage ><HomePage /></SuspendPage>,
        children: [{
            index: true, element: <Landing />
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
        }
        ]

    }])
    return <RouterProvider router={router} />
}

export default AppRouter;

import Categories from '@pages/Categories/Categories';
import { About, Landing, Login, Registeration } from '@pages/index';
import News from '@pages/News/News';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from 'src/HomePage';

const AppRouter = () => {
    const router = createBrowserRouter([{
        path: '/',
        element: <HomePage />,
        children: [{
            index: true, element: <Landing />
        },
        {
            path: 'categories',
            element: <Categories />
        }, {
            path: 'news',
            element: <News />
        },
        {
            path: 'login',
            element: <Login />
        }, {
            path: "registration",
            element: <Registeration />
        }, {
            path: 'about',
            element: <About />
        }
        ]
    }])
    return <RouterProvider router={router} />
}

export default AppRouter;

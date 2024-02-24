import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import RosyVillaHotelPage from '~/pages/RosyVillaHotelPage/RosyVillaHotelPage.tsx';
import MainLandingPage from '~/pages/MainLandingPage/MainLandingPage.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLandingPage/>,
    },
    {
        path: '/rosyVillaHotel',
        element: <RosyVillaHotelPage/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);

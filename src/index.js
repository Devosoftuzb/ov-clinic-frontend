import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './Page/Error';
import Login from './Page/Login';
import RegisterHome from './Components/Register/RegisterHome';
import CustomerProfile from './Components/Register/CustomerProfile';
import RegisterCategory from './Components/Register/RegisterCategory';
import RegisterResult from './Components/Register/RegisterResult';
import KassaHome from './Components/Kassa/KassaHome';
import KassaBack from './Components/Kassa/KassaBack';
import Doctor from './Components/Doctor/Doctor';
import DoctorHistory from './Components/Doctor/DoctorHistory';
import DayDoctor from './Components/Doctor/DayDoctor';
import AdminHome from './Components/Admin/AdminHome';
import AdminWorker from './Components/Admin/AdminWorker';
import AdminRole from './Components/Admin/AdminRole';
import RegCat from './Components/Admin/RegCat';
import RegCatItem from './Components/Admin/RegCatItem';
import LabaratoryPage from './Components/Labaratory/LabaratoryPage';
import LabaratoryActive from './Components/Labaratory/LabaratoryActive';
import LabaratoryHistory from './Components/Labaratory/LabaratoryHistory';
import LabaratoryState from './Components/Labaratory/LabaratoryState';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Login />
            },
            // Регистрация начало 
            {
                path: '/register',
                element: <RegisterHome />,
            },
            {
                path: '/registerCustomerProfile',
                element: <CustomerProfile />
            },
            {
                path: '/registerCategory',
                element: <RegisterCategory />
            },
            {
                path: '/registerResult',
                element: <RegisterResult />
            },
            // Регистрация конец
            // Касса начало 
            {
                path: '/kassa',
                element: <KassaHome />
            },
            {
                path: '/kassaBack',
                element: <KassaBack />
            },
            // Касса конец
            // Доктор начало 
            {
                path: '/doctor',
                element: <Doctor />
            },
            {
                path: '/doctorHistory',
                element: <DoctorHistory />
            },
            {
                path: '/doctorDay',
                element: <DayDoctor />
            },
            // Доктор конец
            {   
                path:"/labaratory",
                element:<LabaratoryPage/>,
                children:[
                    {
                        path:"/labaratory/active",
                        element:<LabaratoryActive/>
                    },
                    {
                        path:"/labaratory/history",
                        element:<LabaratoryHistory/>
                    },
                    {
                        path:"/labaratory/day",
                        element:<LabaratoryState/>
                    }
                ]
            },
            // Админ начало 
            {
                path: '/admin',
                element: localStorage.getItem('ADMIN') ? <AdminHome /> : <Login />
            },
            {
                path: '/workerAdmin',
                element: <AdminWorker />
            },
            {
                path: '/roleAdmin',
                element: <AdminRole />
            },
            {
                path: '/regCatAdmin',
                element: <RegCat />
            },
            {
                path: '/regCatItem',
                element: <RegCatItem />
            }
        ]
    },
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={appRouter} />
    </React.StrictMode>
);
reportWebVitals();

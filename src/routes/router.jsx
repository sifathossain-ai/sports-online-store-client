import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import AddProduct from '../pages/AddProduct';
import Products from '../components/Products';
import SignIn from '../pages/SignIn';
import UpdateProduct from '../components/UpdateProduct';
import Users from '../pages/Users';
import UpdateUser from '../components/UpdateUser';



const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <Products></Products>,
                loader: () => fetch('http://localhost:3000/sports'),
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => fetch(`http://localhost:3000/sports/${params.id}`)
            },
            {
                path: '/users',
                element: <Users></Users>,
                loader: () => fetch('http://localhost:3000/users')
            },
            {
                path: '/updateUser/:id',
                element: <UpdateUser></UpdateUser>,
                loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`)
            }
        ]
    },
])

export default router;


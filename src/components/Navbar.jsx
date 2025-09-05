import React, { use, useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiSolidUserCircle } from "react-icons/bi";
import SignIn from '../pages/SignIn';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user)

    const Links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/users'}>Users</NavLink></li>
        <li><NavLink to={'/addProduct'}>Add Product</NavLink></li>

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
                <Link to={'/'}><button className="btn btn-ghost text-xl">Sports Store</button></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-2">
                {
                    user ? <p>{user.email}</p> : <BiSolidUserCircle className='h-8 w-8' />

                }
                {
                    user ? <button onClick={logOut} className='btn'>Log Out</button> : <button className='btn'><NavLink to={'/signin'}>Sign In | Up</NavLink></button>
                }
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Products from '../components/Products';
import banner from '../assets/bannar.jpg';

const Home = () => {
    return (
        <div >
            <div className='container mx-auto'>
                <header>
                    <Navbar></Navbar>
                </header>
                <main>
                    <Outlet></Outlet>
                </main>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;
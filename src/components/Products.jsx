import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';
import banner from '../assets/bannar.jpg'

const Products = () => {
    const loadSports = useLoaderData();
    const [sports, setSports] = useState(loadSports);

    return (
        <div className='mb-24'>
            <img className='w-full h-72 object-cover rounded-lg mt-10 mb-24' src={banner} alt="" />
            <h2 className='text-center text-5xl font-semibold'>All Products</h2>
            <p className='text-center my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, in dolores blanditiis enim unde maxime modi soluta ipsum maiores corporis. </p>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-12'>
                {
                    sports.map(sport => <Product
                        sports={sports}
                        setSports={setSports}
                        key={sport._id}
                        sport={sport}>
                    </Product>)
                }
            </div>
        </div>
    );
};

export default Products;
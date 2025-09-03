import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const loadSports = useLoaderData();
    const [sports, setSports] = useState(loadSports);

    return (
        <div className='my-24'>
            <h2 className='text-center text-4xl font-semibold'>All Products</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
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
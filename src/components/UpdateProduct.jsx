import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const loadSport = useLoaderData();
    console.log(loadSport);

    const { name, quantity, price, details, photo } = loadSport;

    const handleUpdateProduct = e => {
        e.preventDefault();

    }
    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className="text-6xl">Update Product <span>{name}</span></h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout.</p>
            </div>
            <form onSubmit={handleUpdateProduct}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Product Name</label>
                        <input type="text" name='name' className="input w-full" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Available Quantity</label>
                        <input type="text" name='quantity' className="input w-full" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Price</label>
                        <input type="text" name='price' className="input w-full" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Details</label>
                        <input type="text" name='details' className="input w-full" />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                    <label className="label">Photo</label>
                    <input type="text" name='photo' className="input w-full" />
                </fieldset>

                <input type="submit" className='btn w-full' value="Add Product" />
            </form>
        </div>
    );
};

export default UpdateProduct;
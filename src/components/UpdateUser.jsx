import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const loadUser = useLoaderData();
    // console.log(loadUser);

    const { name, email, address, photo, password } = loadUser;
    const handleUpdateUser = e => {
        e.preventDefault();
    }
    return (
        <div className="hero bg-base-200 rounded-lg py-12 my-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left mb-5">
                    <h1 className="text-2xl md:text-5xl font-bold">Update User <span className='text-rose-500'>{name}</span></h1>
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <form onSubmit={handleUpdateUser} className="card-body space-y-3">
                        <div className="form-control flex flex-col space-y-2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' defaultValue={name} className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control flex flex-col space-y-2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' defaultValue={email} className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control flex flex-col space-y-2">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="address" name='address' defaultValue={address} className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control flex flex-col space-y-2">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="photo" name='photo' defaultValue={photo} className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control mt-6 w-full">
                            <button className="btn btn-primary w-full">Update User</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;
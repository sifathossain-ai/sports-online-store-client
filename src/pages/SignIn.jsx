import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {

    const handleSignIn = e => {
        e.preventDefault();
    }
    return (
        <div className="hero bg-base-200 rounded-lg py-12 my-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left mb-5">
                    <h1 className="text-2xl md:text-5xl font-bold">Sign In</h1>
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body space-y-3">
                        <div className="form-control flex flex-col space-y-2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control flex flex-col space-y-2">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control mt-6 w-full">
                            <button className="btn btn-primary w-full">Sign In</button>
                        </div>
                        <small className='text-center'>Haven't any account yet? <Link to={'/signup'} className='text-rose-500 underline'>Sign Up</Link></small>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
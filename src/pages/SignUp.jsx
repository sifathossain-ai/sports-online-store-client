import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../provider/AuthProvider';

const SignUp = () => {
    const { signUpUser } = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.email.value;
        console.log(name, email, password);

        signUpUser(email, password)
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div className="hero bg-base-200 py-12 my-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left mb-5">
                    <h1 className="text-2xl md:text-5xl font-bold">Sign Up Now!</h1>
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body space-y-3">
                        <div className="form-control flex flex-col space-y-2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="name" name='name' className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control flex flex-col space-y-2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control flex flex-col space-y-2">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="photo" placeholder="photo url" name='photo' className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control flex flex-col space-y-2">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control mt-6 w-full">
                            <button className="btn btn-primary w-full">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { signUpUser } = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.email.value;
        const photo = form.photo.value;
        const address = form.address.value;

        console.log(name, email, password);

        signUpUser(email, password)
            .then(result => {
                console.log(result);

                const creationTime = result?.user?.metadata?.creationTime;

                const newUser = { name, email, address, photo, creationTime }
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Drag me!",
                                icon: "success",
                                draggable: true
                            });
                        }
                    })
            })
    }
    return (
        <div className="hero bg-base-200 rounded-lg py-12 my-12">
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
                                <span className="label-text">Address</span>
                            </label>
                            <input type="address" placeholder="address" name='address' className="input input-bordered w-full" required />
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
                        <small className='text-center'>Already have account? <Link to={'/signin'} className='text-rose-500 underline font-bold'>Sign In</Link></small>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
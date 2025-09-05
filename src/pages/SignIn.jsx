import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const SignIn = () => {
    const { signInUser, setUser } = useContext(AuthContext);
    const notify = () => toast("Login Successfully!");

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const signInInfo = { email, lastSignInTime }

                fetch(`http://localhost:3000/users/${email}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(signInInfo)
                })
                    .then(res => res.json)
                    .then(data => {
                        console.log(data);
                    })
                setUser(result.user)
            })
            .catch(error => {
                console.error("Sign in failed:", error.message);
                alert(error.message);
            });
    };

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
                            <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control flex flex-col space-y-2">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control mt-6 w-full">
                            <button onClick={notify} className="btn btn-primary w-full">Sign In</button>
                            <ToastContainer></ToastContainer>
                        </div>
                        <small className='text-center'>
                            Haven't any account yet?{" "}
                            <Link to="/signup" className="text-rose-500 underline font-bold">
                                Sign Up
                            </Link>
                        </small>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

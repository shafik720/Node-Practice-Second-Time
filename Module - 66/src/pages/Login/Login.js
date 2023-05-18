import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    // --- loging in
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="card  w-full mt-10">
            <div className="card-body w-full sm:w-full md:w-4/6 mx-auto lg:w-2/6">
                <h2 className='font-bold text-2xl text-center text-slate-700'>Login</h2>
                <hr />
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-control mt-5">
                        <label className="label">
                            <span className="label-text font-semibold">Your Email</span>
                        </label>
                        <input type="text" placeholder="Email" className="input border-2 rounded outline-none border-zinc-300 focus:border-blue-500  focus:outline-none " name='Email' required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Your Password</span>
                        </label>
                        <input type="text" placeholder="Password" className="input border-2 rounded outline-none border-zinc-300 focus:border-blue-500  focus:outline-none " name='Password' required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <h2 className=" mt-2">Don't have an account ? <span className='font-semibold text-cyan-500'><Link to={'/register'}>Register Here</Link></span> </h2>
            </div>
        </div>
    );
};

export default Login;
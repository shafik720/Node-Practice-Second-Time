import React from 'react';

const Login = () => {

    // --- loging in
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="card  w-full ">
            <div className="card-body w-full sm:w-full md:w-4/6 mx-auto lg:w-2/6">
                {/* <h2 className='font-bold text-2xl text-center text-slate-700 '>Add a New Product</h2> */}
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-control">
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
            </div>
        </div>
    );
};

export default Login;
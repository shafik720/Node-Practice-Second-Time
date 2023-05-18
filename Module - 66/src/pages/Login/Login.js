import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth' ; 
import auth from '../../firebase.init';

const Login = () => {

    // --- loging in
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password) ;
    }
    useEffect(()=>{
        if(loading){
            console.log('Loading')
        }
        if(error){
            console.log(error.message);
        }
        if(user){
            console.log(user);
        }
    },[loading, error, user])
    return (
        <div className="card  w-full my-10 ">
            <div className="card-body w-full sm:w-full md:w-4/6 mx-auto lg:w-2/6 shadow-2xl">
                <h2 className='font-bold text-2xl text-center text-slate-700'>Login</h2>
                <hr />
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-control mt-5">
                        <label className="label">
                            <span className="label-text font-semibold">Your Email</span>
                        </label>
                        <input type="text" placeholder="Email" className="input border-2 rounded outline-none border-zinc-300 focus:border-blue-500  focus:outline-none " name='email' required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Your Password</span>
                        </label>
                        <input placeholder="Password" className="input border-2 rounded outline-none border-zinc-300 focus:border-blue-500  focus:outline-none " type={"password"} name='password' required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <h2 className=" mt-2">Don't have an account ? <span className='font-semibold text-cyan-500'><Link to={'/register'}>Register Here</Link></span> </h2>
                <div className="social-login">
                    <h2 className=" text-center my-5">Or Sign in using</h2>
                    <button className="social-login-icon flex justify-center items-center border-2 px-8 py-2 border-slate-600 mx-auto w-full">
                        <img className='w-8' src="https://i.ibb.co/Kh4pXXb/google.png" alt="" />
                        <h2 className='ms-3 font-semibold'>Google </h2>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
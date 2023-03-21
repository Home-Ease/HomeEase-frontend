import React, { useState } from 'react'
import '../signup.css'
// import {
//     Card,
//     CardBody,
//     CardFooter,
//     Typography,
//     Input,
//     Checkbox,
//     Button,
// } from "@material-tailwind/react";
// import { ThemeProvider } from "@material-tailwind/react";

const Signup = () => {
    function handleSubmit() {

    }
    const [name, setName] = useState('');


    return (

        <div className=" bg-grey-lighter min-h-screen flex flex-col">
            <div className="signupCont w-1/2 container  mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                </div>
                <div className='mt-6'>
                    <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <a href="../" > Register </a>
                    </button>
                </div>
                <div className="text-grey-dark mt-6">
                    Already have an account?
                    <a className="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>

    );

}

export default Signup
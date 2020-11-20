import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Singin =  () =>{
    const logoData = useSelector(state=>state.nav.logo)
        return (
                <div>
                    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-200">
                        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg bg-opacity-75">
                            <div>
                            <img className="mx-auto h-12 w-auto" src={logoData && logoData.icon.url} alt="Workflow"/>
                            <h2 className="px-4 text-red-600 text-center font-bold">{logoData && logoData.text}</h2>
                            <h2 className="mt-6 text-center text-xl leading-9 font-extrabold text-gray-900">
                                Sign in to your account
                            </h2>
                            <p className="mt-2 text-center text-sm leading-5 text-gray-600">
                                Or <Link to="/signup" href="#" className="font-medium text-red-600 hover:text-red-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                    Sign Up
                                </Link>
                            </p>
                            </div>
                            <form className="mt-8" action="#" method="POST">
                            <input type="hidden" name="remember" value="true"/>
                            <div className="rounded-md shadow-sm">
                                <div>
                                <input aria-label="Email address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address"/>
                                </div>
                                <div className="-mt-px">
                                <input aria-label="Password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password"/>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex items-center">
                                <input id="remember_me" type="checkbox" className="form-checkbox h-4 w-4 text-red-600 transition duration-150 ease-in-out"/>
                                <label for="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">
                                    Remember me
                                </label>
                                </div>

                                <div className="text-sm leading-5">
                                <a href="#" className="font-medium text-red-600 hover:text-red-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                    Forgot your password?
                                </a>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link to="/student">
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-red-500 group-hover:text-red-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                Login
                                </button>
                                </Link>
                            </div>
                            </form>
                        </div>
                    </div>

            </div>
        );

}

export default Singin;

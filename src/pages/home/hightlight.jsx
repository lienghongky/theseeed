import React, { Component } from 'react';

class Hightlight extends Component {
    render() {
        return (
            <div>

                <div className="py-12 ">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center py-10">
                    <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Features of School</p>
                    <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    Provide best Japanese teaching service for 1 million people
                    </h3>
                    <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                    Learn Japanese conversation online.
                    </p>
                </div>

                    <div className="mt-10">
                    <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <li>
                        <div className="flex">
                            <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                                
                            </div>
                            </div>
                            <div className="ml-4">
                            <h4 className="text-lg leading-6 font-medium text-gray-900">One to One Tutoring</h4>
                            <p className="mt-2 text-base leading-6 text-gray-500">
                            Teachers and students are teaching one-on-one to make communication simple and effective.
                            </p>
                            </div>
                        </div>
                        </li>
                        <li className="mt-10 md:mt-0">
                        <div className="flex">
                            <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                </svg>
                            </div>
                            </div>
                            <div className="ml-4">
                            <h4 className="text-lg leading-6 font-medium text-gray-900">7x24 service</h4>
                            <p className="mt-2 text-base leading-6 text-gray-500">
                            In general our system runs at any time of the year. You can book lessons at any time.
                            </p>
                            </div>
                        </div>
                        </li>
                        <li className="mt-10 md:mt-0">
                        <div className="flex">
                            <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            </div>
                            <div className="ml-4">
                            <h4 className="text-lg leading-6 font-medium text-gray-900">7x24 technical support</h4>
                            <p className="mt-2 text-base leading-6 text-gray-500">
                            Beginners provide support system. If you have any problems or trips, you can take a quick trip.
                            </p>
                            </div>
                        </div>
                        </li>
                        <li className="mt-10 md:mt-0">
                        <div className="flex">
                            <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                                
                            </div>
                            </div>
                            <div className="ml-4">
                            <h4 className="text-lg leading-6 font-medium text-gray-900">All native teachers</h4>
                            <p className="mt-2 text-base leading-6 text-gray-500">
                                All teachers are native. Some teachers live not only in mainland China but also in other countries.
                            </p>
                            </div>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>

            </div>
        );
    }
}

export default Hightlight;

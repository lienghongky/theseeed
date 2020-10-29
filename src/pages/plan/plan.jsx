import React from 'react';
import Price from './price';

class Plan extends React.Component {

    render(){
        
        return (
            <div className="bg-gray-100  py-20">
                <div className="h-full">
                    <div className="py-10">
                            <h3 className="text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-700 sm:text-4xl sm:leading-10">
                                Start your <span className="text-red-500">Free Plan</span> Now!
                            </h3>
                            <p className="text-center mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                                Choose your prefers of plans. 
                            </p>
                    </div>
                    <div className="py-20 flex justify-center items-center">
                        <Price/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Plan;

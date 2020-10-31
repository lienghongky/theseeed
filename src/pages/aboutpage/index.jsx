import React from 'react';

const AboutPage = () => {
    return (
        <div className="py-30 bg-gray-200">
            <h1 className="text-3xl text-center font-bold py-8">ABOUT US</h1>
            <div className="flex justify-center">
                <div className="w-11/12 sm:w-1/2  p-10 rounded-lg shadow-xl bg-white flex flex-wrap sm:divide-x">
                    <div className="w-full sm:w-1/2 ">
                        {/* <img className="mx-auto h-10 w-auto" src="https://prismic.io/doc-assets/images/logo-dark.svg" alt="Workflow"/> */}
                        <h1 className="text-lg text-red-600 font-bold text-center py-10">THE SEEED</h1>
                    </div>
                    <div className="w-full sm:w-1/2 flex justify-center items-center">
                        <div className="px-4">
                            <p className="text-sm text-gray-600">LOCATION: <span className="text-sm text-gray-800 font-medium">WORLD WIDE</span></p>
                            <p className="text-sm text-gray-600">TEL: <span className="text-sm text-gray-800 font-medium">00-11-222-333</span></p>
                            <p className="text-sm text-gray-600">MAIL: <span className="text-sm text-gray-800 font-medium">ADMIN@THESEEED.COM</span></p>
                        </div>
                    </div>
                    
                </div>
                

            </div>
            <div className=" flex justify-center">
            <div className="py-10 w-11/12 sm:w-1/2">
                <p className="text-gray-600 text-lg text-center">
                Why does The Economist call itself a newspaper?

                When James Wilson published the prospectus for The Economist, a new periodical he planned to launch, he described it as “a weekly paper, to be published every Saturday”. To modern eyes the 19th-century black-and-white incarnation of The Economist is clearly a newspaper, and it looked very similar until the middle of the 20th century. The red logo appeared for the first time in 1959, the first colour cover in 1971, and it was only in 2001 that full colour was introduced on all inside pages. By the time the transformation from newspaper to magazine format had been completed, the habit of referring to ourselves as “this newspaper” had stuck.
                </p>
            </div>
            </div>
            
        </div>
    );
}

export default AboutPage;

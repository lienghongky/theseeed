import React from 'react';

const HelpPage = () => {
    const faqs = [
        {
            id:1,
            question:'what is the site?',
            answer:'this site provide News, Tips and other information.'
        },
        {
            id:2,
            question:'what is the site?',
            answer:'this site provide News, Tips and other information.'
        },
        {
            id:3,
            question:'what is the site?',
            answer:'this site provide News, Tips and other information.'
        },
        {
            id:4,
            question:'what is the site?',
            answer:'this site provide News, Tips and other information.'
        }
    ]
    const faqComponnent = faqs.map((e,index)=>(
        <div className="py-4">
            <div data-open="0" className="flex justify-between items-center">
                <div className="">
                    <h4 className="font-meduim text-2xl">{e.question}</h4>
                </div>
                <div><button className="w-8 h-8">^</button></div>
            </div>
            <div className="text-gray-600"><p>{e.answer}</p></div>
        </div>
    ))
    return (
        <div className="py-30 bg-gray-200">
            <h1 className="text-3xl text-center font-bold py-8">How Could We Do to Help You?</h1>
            <div className="flex justify-center">
                <div className=" w-11/12 sm:w-1/2 h-10 p-2 rounded-lg shadow-xl bg-white">
                    <input className="border-none w-full" type="text" placeholder="What are you looking for?"/>
                </div>

            </div>
            <div className="flex justify-center py-8">
                <div className="flex flex-col divide-y px-4">
                    {faqComponnent}
                </div>
            </div>
        </div>
    );
}

export default HelpPage;

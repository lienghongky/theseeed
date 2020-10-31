import React from 'react';

const ContactPage = () => {
    const contacts = [
        {
            id:1,
            title:'Facebook',
            icon:'https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png',
            url:''
        },
        {
            id:1,
            title:'Twitter',
            icon:'https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/256/Twitter_NEW.png',
            url:''
        },
        {
            id:1,
            title:'Instagram',
            icon:'https://image.flaticon.com/icons/png/512/174/174855.png',
            url:''
        },
        {
            id:1,
            title:'Line',
            icon:'https://cdn.worldvectorlogo.com/logos/line-messenger.svg',
            url:''
        }
    ]
    const contactComponent = contacts.map((e,index)=>( 
                    <a href={e.url} target="_blank"  key={index} className="px-4 cursor-pointer">
                        <img className="w-10 h-10 object-contain mx-auto" src={e.icon} alt=""/>
                        <p className="text-bold text-center text-sm pt-4">{e.title}</p>
                    </a>
    ))
    return (
        <div className="py-30 bg-gray-200">
            <h1 className="text-3xl text-center font-bold py-8">CONTACT US</h1>
            <div className="flex justify-center">
                <div className=" w-11/12 sm:w-1/2  p-10 rounded-lg shadow-xl bg-white flex flex-wrap  sm:divide-x">
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
            <div className="flex justify-center">
                <div className="flex py-10">
                {contactComponent}
                </div>
            </div>
            
        </div>
    );
}

export default ContactPage;

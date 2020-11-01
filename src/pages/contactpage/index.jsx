import React, {useState, useEffect} from 'react';
import {client, linkResolver } from '../../prismic-configuration'
import {Link, RichText, Date} from 'prismic-reactjs';
import { useSelector } from 'react-redux';

const ContactPage = () => {
    const [PageData, setPageData] = useState(null);

    const logoData = useSelector(state=>state.nav.logo)
    const fetchData = ()=>{
          client.getSingle('contactpage').then((res)=>{
        
          setPageData(res.data)
          console.log(res)
          }).catch(error=>{
            console.log(error)
          })
      }
    useEffect(()=>{
        fetchData();
    },[])
    const contactComponent = PageData && PageData.body.map((slice, index)=>{
        if(slice.slice_type == 'contact_link'){
            const  teams = slice.items.map((item,index)=>
                 (
                    <a href={item.link.url} target="_blank"  key={index} className="px-4 cursor-pointer">
                        <img className="w-10 h-10 object-contain mx-auto" src={item.icon.url} alt=""/>
                        <p className="text-bold text-center text-sm pt-4">{RichText.asText(item.name,linkResolver)}</p>
                    </a>
                )
            )
            return teams
        }
        return null;
    })
    return (
        <div className="py-30 bg-gray-200">
            <h1 className="text-3xl text-center font-bold py-8">CONTACT US</h1>
            <div className="flex justify-center">
                <div className=" w-11/12 sm:w-1/2  p-10 rounded-lg shadow-xl bg-white flex flex-wrap  sm:divide-x">
                    <div className="w-full sm:w-1/2 ">
                        <img className="mx-auto h-10 w-auto" src={logoData&&logoData.icon.url} alt="Workflow"/>
                        <h1 className="text-lg text-red-600 font-bold text-center py-2">{logoData&&logoData.text}</h1>
                    </div>
                    <div className="w-full sm:w-1/2 flex justify-center items-center">
                        <div className="px-4">
                            {PageData && RichText.render(PageData.site_contact,linkResolver)}
                            {/* <p className="text-sm text-gray-600">LOCATION: <span className="text-sm text-gray-800 font-medium">WORLD WIDE</span></p>
                            <p className="text-sm text-gray-600">TEL: <span className="text-sm text-gray-800 font-medium">00-11-222-333</span></p>
                            <p className="text-sm text-gray-600">MAIL: <span className="text-sm text-gray-800 font-medium">ADMIN@THESEEED.COM</span></p> */}
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

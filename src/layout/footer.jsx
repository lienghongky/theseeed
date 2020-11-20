import { RichText } from 'prismic-reactjs';
import React, { Component, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { client, linkResolver } from '../prismic-configuration';

const Footer = ()=>{
    const links = useSelector(state => state.nav.links)
    const linksComponent = links.map(e=>(<Link key={e.path} className={`hover:text-red-600`} to={e.path}>{e.title}</Link>))
    
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
                    <div key={index} className="px-4 hover:border-4 border-solid hover:border-red-600 rounded-lg">
                        <a href={item.link.url} target="_blank">
                        <img className="w-6 h-6 object-contain mx-auto " src={item.icon.url} alt=""/>
                        <p className="text-bold text-center text-sm pt-4 text-gray-800 hover::text-red-600">{RichText.asText(item.name,linkResolver)}</p>
                        </a>
                    </div>
                )
            )
            return teams
        }
        return null;
    })

        return ( 
            <div className="bg-gray-100 relative border border-b-0 border-r-0 border-l-0 border-solid ">
                <div className="flex flex-wrap p-6 py-20 ">
                    <div className="w-1/2 sm:w-1/4 flex-1 flex flex-col items-center sm:items-start justify-start  space-y-4 text-gray-800 text-sm font-semibold px-8">
                            {linksComponent}
                            {/* <Link className="hover:text-indigo-600" to="/student">Student</Link>
                            <Link className="hover:text-indigo-600" to="/teacher">Teacher</Link>
                            <Link className="hover:text-indigo-600" to="/plan">Plan</Link>
                            <Link className="hover:text-indigo-600" to="/help">Help</Link> */}
                    </div>
                    <div className="w-full sm:w-3/4 flex-1 flex flex-col items-center   justify-start  text-white text-sm font-semibold px-8 py-4">
                        <div className="w-full sm:w-1/3 border border-t-0 border-l-0 border-r-0 mb-4">
                            <img className="mx-auto h-10 w-auto" src={logoData&&logoData.icon.url} alt="Workflow"/>
                            <h1 className="text-lg text-red-600 font-bold text-center py-2">{logoData&&logoData.text}</h1>
                        </div>
                        <div className="flex-1 flex">
                            {contactComponent}
                        </div>
                    </div>
                    <div className="w-full sm:w-1/4 relative flex">
                        <div style={{width:'1px'}} className="hidden sm:inline-block h-full bg-gray-300"></div>
                        <div className="flex-1 flex items-center justify-start px-6 sm:px-10  text-gray-800">
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold">Web Info</h3>
                                {PageData && RichText.render(PageData.site_contact,linkResolver)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-10 absolute bottom-0 inset-x-0 bg-gray-900 flex items-center">
                    <div className="text-white">
                        <p className="text-sm font-bold px-2 ">
                            © 2020 Powered by THE SEEED
                        </p>
                    </div>
                </div>
            </div>
         );
    
}
 
export default Footer;
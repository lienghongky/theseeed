import React, {useState, useEffect} from 'react';
import {client, linkResolver } from '../../prismic-configuration'
import {Link, RichText, Date} from 'prismic-reactjs';
import { useSelector } from 'react-redux';

const AboutPage = () => {
    const [PageData, setPageData] = useState(null);
    
    const logoData = useSelector(state=>state.nav.logo)
    const fetchData = ()=>{
          client.getSingle('aboutpage').then((res)=>{
        
          setPageData(res.data)
          console.log(res)
          }).catch(error=>{
            console.log(error)
          })
      }
    useEffect(()=>{
        fetchData();
    },[])
    const teamComponent = PageData && PageData.body.map((slice, index)=>{
        if(slice.slice_type == 'team'){
            const  teams = slice.items.map((item,index)=>
                 (
                    <div className="p-4 m-2 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center">
                        <img className="w-34 h-34 rounded-full overflow-hidden shadow-lg" src={item.portrait.url} alt=""/>
                        <h1 className="font-bold text-sm text-gray-800 pt-4">{RichText.asText(item.first_and_lastname,linkResolver)}</h1>
                        <p className="text-sm font-thin text-gray-600">{RichText.asText(item.position,linkResolver)}</p>
                        <a href={item.link.url} className=""><p className="p-1 px-4 mt-4 text-gray-600  border border-gray-600 border-solid rounded-lg text-sm">SEE MORE</p></a>
                    </div>
                )
            )
            return teams
        }
    })
    return (
        <div className="py-30 bg-gray-200">
            <h1 className="text-3xl text-center font-bold py-8">ABOUT US</h1>
            <div className="flex justify-center">
                <div className="w-11/12 sm:w-1/2  p-10 rounded-lg shadow-xl bg-white flex flex-wrap sm:divide-x">
                    <div className="w-full sm:w-1/2 ">
                        <img className="mx-auto h-10 w-auto" src={logoData&&logoData.icon.url} alt="Workflow"/>
                        <h1 className="text-lg text-red-600 font-bold text-center py-2">{logoData&&logoData.text}</h1>
                    </div>
                    <div className="w-full sm:w-1/2 flex justify-center items-center">
                        <div className="px-4 text-lg font-thin">
                            {PageData && RichText.render(PageData.site_contact,linkResolver)}
                            {/* <p className="text-sm text-gray-600">LOCATION: <span className="text-sm text-gray-800 font-medium">WORLD WIDE</span></p>
                            <p className="text-sm text-gray-600">TEL: <span className="text-sm text-gray-800 font-medium">00-11-222-333</span></p>
                            <p className="text-sm text-gray-600">MAIL: <span className="text-sm text-gray-800 font-medium">ADMIN@THESEEED.COM</span></p> */}
                        </div>
                    </div>
                    
                </div>
                

            </div>
            <div className=" flex justify-center">
            <div className="py-10 w-11/12 sm:w-1/2">
                <p className="text-gray-600 text-md text-center">
                    {PageData && RichText.render(PageData.site_detail,linkResolver)}
                </p>
            </div>
            </div>
            <div className=" flex justify-center">
            <div className="py-10 flex flex-wrap justify-center items-center">
                {teamComponent}
            </div>
            </div>
            
        </div>
    );
}

export default AboutPage;

import React, {useState, useEffect} from 'react';
import {client, linkResolver } from '../../prismic-configuration'
import {Link, RichText, Date} from 'prismic-reactjs';
import { useSelector } from 'react-redux';


const HelpPage = () => {
    const [PageData, setPageData] = useState(null);
    
    
    const fetchData = ()=>{
          client.getSingle('helppage').then((res)=>{
        
          setPageData(res.data)
          console.log(res)
          }).catch(error=>{
            console.log(error)
          })
      }
    useEffect(()=>{
        fetchData();
    },[])
    const faqContent = PageData && (<div>{RichText.render(PageData.faq, linkResolver)}</div>)

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
            <h1 className="text-3xl text-center font-bold py-8">{PageData && RichText.asText(PageData.header, linkResolver)}</h1>
            <div className="flex justify-center">
                <div className=" w-11/12 sm:w-1/2 h-10 p-2 rounded-lg shadow-xl bg-white">
                    <input className="border-none w-full" type="text" placeholder="What are you looking for?"/>
                </div>

            </div>
            <div className="flex justify-center py-8">
                <div className="px-4 text-light">
                    {faqContent}
                </div>
            </div>
        </div>
    );
}

export default HelpPage;

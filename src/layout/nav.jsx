import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import * as NavAction from '../redux/nav/action'


const Nav = ({ match,history })=>{
    const [sideBarActive,setSideBarActive]=useState(false);
    // const [doc, setDocData] = useState(null)
    const handleToggleSideBar = ()=>{
        setSideBarActive(!sideBarActive)
        console.log('click')
    }
    const handleLinkClicked = (e)=>{
        
    }
    const location = useLocation();
    const links = useSelector(state => state.nav.links)
    const selectedLink = useSelector(state => state.nav.selectedLink)
    const linkDispatch = useDispatch()
    const linksComponent = links.map(e=>(<Link onClick={()=>handleLinkClicked(e)} key={e.path} className={`hover:text-red-600 ${selectedLink && selectedLink.path === e.path && 'text-red-500'}`} to={e.path}>{e.title}</Link>))
    useEffect(()=>{
        console.log(location.pathname)
        linkDispatch(NavAction.selectLinkByPath(location.pathname))
    },[location])
    // useEffect(()=>{
    //     const fetchData = async () => {
    //         // We are using the function to get a document by its UID
    //         const result = await client.getByUID('page', 'home')
    //         console.log("result",result);
    //         if (result) {
    //           // We use the State hook to save the document
    //           return setDocData(result)
    //         } else {
    //           // Otherwise show an error message
    //           console.warn('Page document not found. Make sure it exists in your Prismic repository')
              
    //         }
    //       }
    //     //   fetchData()
    // },[])
    

 
        const navStyle = {
            zIndex:999
        }

        return ( 
            <div style={navStyle} className="fixed top-0 inset-x-0 bg-gray-200  shadow-lg font-semibold text-gray-900 flex p-4 sm:pl-10  bg-opacity-75 border border-opacity-25 border-solid border-red-600">
                    <div className="flex items-center">
                        <Link className="hover:text-red-600" to="/">
                            <div className="flex justify-center items-center">
                            <img className="mx-auto h-10 w-auto" src="https://prismic.io/doc-assets/images/logo-dark.svg" alt="Workflow"/>
                            <h2 className="px-4 text-red-600">TheSeeed</h2>
                            </div>
                        </Link>
                    </div>
    
                    {/* Destop screen */}
                    <div className="hidden sm:flex flex-1  justify-end items-center px-4 space-x-4 text-sm">
                        {linksComponent}
                        <div className="px-4 space-x-2 pl-8">
                        <Link className=" rounded-lg p-2 px-4 text-gray-800" to="/login">Login</Link>
                        <Link className="rounded-lg p-2 px-4 border-solid border-2 border-red-600" to="/signup">Sign up</Link>
                        </div>
                    </div>
                    {/* Mobile screen */}
                    <div className="sm:hidden flex-1 flex justify-end">
                        <button onClick={handleToggleSideBar} className="px-4 p-2  rounded-lg shadow-lg text-red-600">=</button>
                       
                    </div>
                    {/* SIDE BAR */}
                    {
                       sideBarActive && (
                        <div  className="transition  duration-500 transform ease-in-out fixed top-0 right-0 h-screen w-2/3 bg-white shadow-lg">
                            <div className="flex justify-end p-2">
                                <button onClick={handleToggleSideBar} className="px-4 p-2  rounded-lg shadow-lg text-red-600">X</button>
                            </div>
                            <div className="flex flex-col p-4 space-y-2">

                                {linksComponent}
                                <div className="p-2 flex flex-col space-y-2 text-center">
                                <Link className="bg-red-600 rounded-lg p-2 px-4 text-white  shadow-lg" to="/login">Login</Link>
                                <Link className="bg-white rounded-lg p-2 px-4 text-red-600 shadow-lg" to="/signup">Sign up</Link>
                                </div>
                            </div>
                        </div>
                        )
                        
                    }
            </div>
        );
    
    
};
 
export default Nav;



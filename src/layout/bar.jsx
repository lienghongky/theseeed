import { Icon } from 'element-react';
import React from 'react';
import { Link } from 'react-router-dom';

class Bar extends React.Component{
    render(){
        const tabs = [
            {
                title:'Dashboard',
                icon:'menu',
                url:'/student'
            },
            {
                title:'Teachers',
                icon:'search',
                url:'/teachers'
            },
            {
                title:'History',
                icon:'time',
                url:'/history'
            },
            {
                title:'Plan',
                icon:'plus',
                url:'/plan'
            }
        ]
        return (
            <div className="flex sm:hidden fixed bottom-0 w-full bg-gray-300 shadow-lg z-nav ">
                {
                    tabs.map((e,index)=>(
                        <div className={`w-1/${tabs.length} flex justify-center items-center py-4 `} key={index}>
                            <Link to={e.url}>
                                <Icon className="mr-auto ml-auto" name={e.icon}/>
                                <p className="text-xs font-thin text-black">{e.title}</p>
                            </Link>
                            
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Bar;

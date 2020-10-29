import { Icon } from 'element-react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
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
            <div className="group hidden sm:block transition duration-500 ease-in-out   bg-white shadow-lg sm:mt-30 sm:mb-4 rounded-lg rounded-tl-none rounded-bl-none divide-y">
                
                {/* <div className=" w-full pt-8 flex justify-center items-center">
                    <div className=" w-full">
                        <img className="shadow-lg mr-auto ml-auto w-20 h-20 group-hover:w-20 group-hover:h-20 object-cover rounded-full border-gray-400 border-solid border-2" src="https://25again.com/wp-content/uploads/2019/07/side-profile-guy.jpg" />
                        <div className=" transition duration-500 text-gray-700 py-4">
                            <p className="text-sm text-center">ID0202929</p>
                            <h3 className="text-sm font-bold text-center">STUDENT NAME</h3>
                        </div>
                    </div>

                </div> */}
                {
                    
                    tabs.map((e,index)=>(
                        <Link to={e.url} key={index}>
                            <div className={`sm:w-full sm:text-left flex justify-start items-center py-4 sm:px-4 hover:bg-gray-500`} >
                                <Icon name={e.icon}/>
                                <p className="text-sm font-bold text-gray-800 px-2">{e.title}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
          );
    }
}
 
export default SideBar;
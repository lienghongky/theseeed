import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="bg-gray-800 relative">
                <div className="flex flex-wrap p-6 py-20 ">
                    <div className="w-1/2 sm:w-1/4 flex-1 flex flex-col justify-start  space-y-4 text-white text-sm font-semibold px-8">
                            <Link className="hover:text-indigo-600" to="/student">Student</Link>
                            <Link className="hover:text-indigo-600" to="/teacher">Teacher</Link>
                            <Link className="hover:text-indigo-600" to="/plan">Plan</Link>
                            <Link className="hover:text-indigo-600" to="/help">Help</Link>
                    </div>
                    <div className="w-1/2 sm:w-1/4 flex-1 flex flex-col justify-start space-y-4  text-white text-sm font-semibold px-8">
                            <Link className="hover:text-indigo-600" to="/student">Term & Condition</Link>
                            <Link className="hover:text-indigo-600" to="/teacher">Privacy Policy</Link>
                            <Link className="hover:text-indigo-600" to="/plan">Contact Us</Link>
                            <Link className="hover:text-indigo-600" to="/help">Support</Link>
                    </div>
                    <div className="w-full sm:w-2/4 relative flex">
                        <div style={{width:'1px'}} className="hidden sm:inline-block h-full bg-gray-300"></div>
                        <div className="flex-1 flex items-center justify-start px-6 sm:px-10  text-white">
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold">Web Info</h3>
                                <ul className="list-disc space-y-4">
                                    <li>Location: <span>YOKOHAMA</span></li>
                                    <li>Tel: <span>81-045-514-8158</span></li>
                                    <li>Email: <span>admin@flatja.com</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-10 absolute bottom-0 inset-x-0 bg-gray-900 flex items-center">
                    <div className="text-white">
                        <p className="text-sm font-bold px-2 ">
                            © 2020 Powered by FlatJa
                        </p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Footer;
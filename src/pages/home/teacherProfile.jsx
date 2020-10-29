import React, { Component } from 'react';
import { Button, Icon, Rate, Table, Tabs, Tag, Form, Select, Input, DateRangePicker} from 'element-react';
import {Link} from 'react-router-dom';
class TeacherProfile extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="bg-white rounded-lg shadow-lg p-8">
                                      <div className="flex flex-wrap ">
                                              <div className="w-full sm:w-auto  px-4 py-4">
                                                <img className="ml-auto mr-auto my-4 shadow-lg w-30 h-30 object-cover rounded-full border-gray-400 border-solid border-2" src="https://25again.com/wp-content/uploads/2019/07/side-profile-guy.jpg" />
                                                <div className="py-1 flex justify-center items-center">
                                                        <Rate disabled={true} value={4.5} showText={true}/>
                                                </div>
                                                <div className="pt-4 flex-1 flex justify-center items-center">
                                                    {/* <Button type="primary" icon="edit"></Button> */}
                                                    <Link to="/teacherdetail">
                                                    <Button onClick={this.onClick}  type="success">Detail</Button>
                                                    </Link>
                    
                                                </div>
                                              </div>
                                              <div className="flex-1 pl-4">
                                                    <h3 className="text-lg font-Light text-black">TEACHER NAME</h3>
                                                    <ul className="flex-1 pt-4 space-y-2 font-light">
                                                        <li><p className="text-gray-600">Gender: </p><span className="text-black text-lg">Male</span></li>
                                                        <li><p className="text-gray-600">Native: </p><span className="text-black text-lg">Japanese</span></li>
                                                        <li><p className="text-gray-600">Also Speak: </p><span className="text-black text-lg">Chinese | English</span></li>
                                                        <li><p className="text-gray-600">Available: </p><span className="text-black text-lg">SAT | SUN</span></li>
                                                        
                                                    </ul>

                                              </div>
                                      </div>
                                  </div>
         );
    }
}
 
export default TeacherProfile;
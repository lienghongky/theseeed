import { Button, Icon, Rate, Table, Tabs, Tag } from 'element-react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bar from '../../layout/bar';
import SideBar from '../../layout/sideBar';
class Student extends Component {
    state = {  }
    constructor(props) {
        super(props);
      
        this.state = {
          columns: [
            {
              type: 'expand',
              expandPannel: function(data) {
                return (
                  <div>
                    <div className="flex">
                        <img className="shadow-lg w-16 h-16 object-cover rounded-full border-gray-400 border-solid border-2" src="https://25again.com/wp-content/uploads/2019/07/side-profile-guy.jpg" />
                        <div className="flex-1 pl-4">
                            <h3 className="text-sm font-bold">TEACHER NAME</h3>
                            <p className="text-sm font-light">Japanese | Chinese | English</p>
                            <div className="py-1">
                                <Rate disabled={true} value={4.5} showText={true}/>
                            </div>
                            

                        </div>
                    </div>
                    <ul className="pt-4 space-y-2">
                        <li><p className="text-gray-600">Date: <span className="text-gray-900">2020 July 22</span></p></li>
                        <li><p className="text-gray-600">Time: <span className="text-gray-900">21:00</span></p></li>
                        <li><p className="text-gray-600">Content: <Tag type="gray">Text Book</Tag></p></li>
                        <li><p className="text-gray-600">Category: <Tag type="gray">Sport</Tag></p></li>
                        <li><p className="text-gray-600">Topic: <span className="text-gray-900">Enjoy reading all kinds of texts in Japanese.
Look up any word with a single click.
A must for intermediate and advanced learners</span></p></li>
                    </ul>
                  </div>
                )
              }
            },
            {
              label: "ID",
              prop: "id",
            },
            {
              label: "Date",
              prop: "date",
            },
            {
                label: "Time",
                prop: "time",
            },
            {
                label: "Teacher",
                prop: "name",
            },
            {
                label: "Status",
                prop: "status",
                render: function(data){
                    return <Tag type="success">{data.status}</Tag>
                  }
            }
          ],
          data: [{
            date: '2016-05-03',
            name: 'Tom',
            status: 'Verified',
            time: '20:00',
            address: 'No. 189, Grove St, Los Angeles',
            id: 'CA 90036'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            status: 'Verified',
            time: '20:00',
            address: 'No. 189, Grove St, Los Angeles',
            id: 'CA 90036'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            status: 'Verified',
            time: '20:00',
            address: 'No. 189, Grove St, Los Angeles',
            id: 'CA 90036'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            status: 'Verified',
            time: '20:00',
            address: 'No. 189, Grove St, Los Angeles',
            id: 'CA 90036'
          }, {
            date: '2016-05-08',
            name: 'Tom',
            status: 'Verified',
            time: '20:00',
            address: 'No. 189, Grove St, Los Angeles',
            id: 'CA 90036'
          }, {
            date: '2016-05-06',
            name: 'Tom',
            status: 'Verified',
            time: '20:00',
            address: 'No. 189, Grove St, Los Angeles',
            id: 'CA 90036'
          }, {
            date: '2016-05-07',
            name: 'Tom',
            status: 'Verified',
            time: '20:00',
            address: 'No. 189, Grove St, Los Angeles',
            id: 'CA 90036'
          }],
          histories: [{
            date: '2016-05-03',
            name: 'かずせんせい',
            status: 'Verified',
            time: '20:00',
            address: 'No. 189, Grove St, Los Angeles',
            id: 'CA 90036'
          }, {
            date: '2016-05-02',
            name: 'かずせんせい',
            status: 'Finished',
            time: '20:00',
            address: 'No. 189, Grove St, Los Angeles',
            id: 'CA 90036'
          }, {
            date: '2016-05-04',
            name: 'かずせんせい',
            status: 'Finished',
            time: '20:00',
            address: 'No. 189, Grove St, Los Angeles',
            id: 'CA 90036'
          }, {
            date: '2016-05-01',
            name: 'かずせんせい',
            status: 'Finished',
            time: '20:00',
            address: 'No. 189, Grove St, Los Angeles',
            id: 'CA 90036'
          }, {
            date: '2016-05-08',
            name: 'かずせんせい',
            status: 'Finished',
            time: '20:00',
            address: 'No. 189, Grove St, Los Angeles',
            id: 'CA 90036'
          }, {
            date: '2016-05-06',
            name: 'かずせんせい',
            status: 'Finished',
            time: '20:00',
            address: 'No. 189, Grove St, Los Angeles',
            id: 'CA 90036'
          }, {
            date: '2016-05-07',
            name: 'かずせんせい',
            status: 'Finished',
            time: '20:00',
            address: 'No. 189, Grove St, Los Angeles',
            id: 'CA 90036'
          }]
        }
      }
    render() { 
        const creditData={
            plan:{
                title:'TOTAL',
                subtitle:'Tickets',
                value:50
            },
            usage:{
                title:'USED',
                subtitle:'Tickets',
                value:-20
            },
            left:{
                title:'LEFT',
                subtitle:'Tickets',
                value:30
            }
        }
        return ( 
            <div className="min-h-full flex bg-gray-200">
                <Bar className="sm:hidden"/>
                <SideBar className="hidden sm:static"/>
                <div className="flex-1 flex flex-wrap justify-center pt-30 sm:pl-10">
                    <div className="w-full md:w-1/2 lg:w-2/3 px-8">
                        <div className="flex bg-white rounded-lg shadow-lg  text-gray-700 overflow-hidden mb-8">
                            <div className="w-1/4 flex items-center justify-center bg-gray-600 text-white">
                                <div className="">
                                  <h3 className="font-extrabold text-6xl text-center">$</h3>
                                  <Link to="/plan">
                                    <Button className="bg-opacity-0" type="success" >GET MORE TICKETS</Button>
                                  </Link>
                                </div>
                            </div>
                            <div className="flex-1 flex divide-x py-8">
                                <div className="w-1/3 text-center">
                                    <h4 className=" text-sm  ">{creditData.plan.title}</h4>
                                    <h1 className=" text-blue-400 text-4xl font-bold py-2">{creditData.plan.value}</h1>
                                    <h4 className=" text-sm font-light pt-4">{creditData.plan.subtitle}</h4>
                                    
                                </div>
                                <div className="w-1/3 text-center">
                                    <h4 className=" text-sm  ">{creditData.usage.title}</h4>
                                    <h1 className=" text-red-400 text-4xl font-bold py-2">{creditData.usage.value}</h1>
                                    <h4 className=" text-sm font-light pt-4">{creditData.usage.subtitle}</h4>
                                    
                                </div>
                                <div className="w-1/3 text-center">
                                    <h4 className=" text-sm  ">{creditData.left.title}</h4>
                                    <h1 className="text-green-400 text-4xl font-bold py-2">{creditData.left.value}</h1>
                                    <h4 className=" text-sm font-light pt-4">{creditData.left.subtitle}</h4>
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full">
                              <h3>Suggested Teachers:</h3>
                            </div>
                            {
                              [1,2,3,4,5,6,7,8].map((e,index)=>(
                                <div className="w-full my-4">
                                    <div className="bg-white rounded-lg shadow-lg p-8">
                                      <div className="flex flex-wrap ">
                                              <div className="w-full sm:w-auto px-4 py-4">
                                                <img className="ml-auto mr-auto my-4 shadow-lg w-30 h-30 object-cover rounded-full border-gray-400 border-solid border-2" src="https://25again.com/wp-content/uploads/2019/07/side-profile-guy.jpg" />
                                                <div className="py-1 flex justify-center items-center">
                                                        <Rate disabled={true} value={4.5} showText={true}/>
                                                </div>
                                                <div className="pt-4 flex-1 flex justify-center items-center">
                                                    {/* <Button type="primary" icon="edit"></Button> */}
                                                    <Link to="/teacherdetail">
                                                      <Button  type="success">Book</Button>
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
                                              <div className="w-full sm:w-2/5">
                                                <Tabs activeName="1" onTabClick={ (tab) => console.log(tab.props.name) }>
                                                  <Tabs.Pane label="Intro" name="1">
                                                    <div className="">
                                                      <p className="text-sm font-thin">
                                                      大学在校期间进修了倍乐生商贸Benesse（旧福武书店）批阅老师，以后继续担任家教，同时从一对多或一对一辅导取得了各种各样的私塾老师经验。我妻子是中国人，我自己也取得了新HSK6级资格。现在也教日本人学习汉语，到现在为止也一直教中国人日语。 妻は中国人で日本人に中国語を教えており、わたし自身も新HSK6級を取得し日本人に中国語を教えています。現在は中国に長期出張中につき、オンライン日本語教師や翻訳またライターをさせていただいています。
                                                      </p>
                                                    </div>
                                                  </Tabs.Pane>
                                                  <Tabs.Pane label="Schedule" name="2">Config</Tabs.Pane>
                                                </Tabs>
                                              </div>
                                              
                                      </div>
                                  </div>
                                </div>
                              ))
                            }
                        </div>
                      </div>
                    <div className="w-full md:w-1/2  lg:w-1/3 px-8">
                        <div className="p-6 bg-white shadow-lg rounded-lg rounded-b-none">

                            <div className="w-full relative">
                                <Button className="absolute top-0 right-0" plain={true} type="primary" icon="edit"></Button>
                                <img className="shadow-lg mr-auto ml-auto w-20 h-20 group-hover:w-20 group-hover:h-20 object-cover rounded-full border-gray-400 border-solid border-2" src="https://25again.com/wp-content/uploads/2019/07/side-profile-guy.jpg" />
                                <div className=" transition duration-500 text-gray-700 pt-4">
                                    <p className="text-sm text-center">ID0202929</p>
                                    <h3 className="text-sm font-bold text-center">STUDENT NAME</h3>
                                </div>
                            </div>
                            <div className="flex pt-10 divide-x">
                                <div className="w-1/2">
                                    <h3 className="text-gray-700 text-sm font-light text-center">Total Lessons</h3>
                                    <h3 className="text-gray-900 text-3xl font-bold text-center">64</h3>
                                </div>
                                <div className="w-1/2">
                                    <h3 className="text-gray-700 text-sm font-light text-center">Total Hour</h3>
                                    <h3 className="text-gray-900 text-3xl font-bold text-center">120H</h3>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-300 shadow-lg flex flex-wrap justify-center p-4 space-y-4">
                            <div className="w-full" key="-1">
                                <h3 className="text-sm font-bold">Booked Lesson:</h3>
                            </div>
                            {
                                [1,2,3,4,5,6].map((e,index)=>(
                                    <div className="w-full bg-white text-gray-700 rounded-lg shadow-lg p-4" key={index}>
                                        <div className="flex justify-end items-center">
                                            <p className="text-sm font-thin px-2">Start in 5min</p>
                                            <span className="flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <img className="shadow-lg w-16 h-16 object-cover rounded-full border-gray-400 border-solid border-2" src="https://25again.com/wp-content/uploads/2019/07/side-profile-guy.jpg" />
                                            <div className="flex-1 pl-4">
                                                <h3 className="text-sm font-bold">TEACHER NAME</h3>
                                                <p className="text-sm font-light">Japanese | Chinese | English</p>
                                                <div className="py-1">
                                                    <Rate disabled={true} value={4.5} showText={true}/>
                                                </div>
                                                

                                            </div>
                                        </div>
                                        <ul className="pt-4 space-y-2">
                                            <li><p className="text-gray-600">Date: <span className="text-gray-900">2020 July 22</span></p></li>
                                            <li><p className="text-gray-600">Time: <span className="text-gray-900">21:00</span></p></li>
                                            <li><p className="text-gray-600">Content: <Tag type="gray">Text Book</Tag></p></li>
                                            <li><p className="text-gray-600">Category: <Tag type="gray">Sport</Tag></p></li>
                                        </ul>
                                        <div className="pt-4 flex space-x-2 justify-end items-center">
                                            <Button type="primary" icon="edit"></Button>
                                            <Link to="/live">
                                              <Button type="success">Enter</Button>
                                            </Link>
            
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>

                </div>
            </div>
         );
    }
}
 
export default Student;
import { Button, Icon, Rate, Table, Tabs, Tag, Form, Select, Input, DateRangePicker} from 'element-react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bar from '../../layout/bar';
import SideBar from '../../layout/sideBar';
import Schedule from './schedule';
class Teacher extends Component {
    state = {  }
    constructor(props) {
        super(props);
      
        this.state = {
          
          form: {
            date:null,
            user: '',
            region: ''
          },
        }
      }
      onClick = (e)=>{
        console.log('Click')
        console.log(this.props)
        // this.props.history.push('/teacherdetail');
      }
      onSubmit(e) {
        e.preventDefault();
      }
      
      onChange(key, value) {
        this.setState({
          form: Object.assign(this.state.form, { [key]: value })
        });
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
                    <div className="w-full  px-8">
                        <div className="flex bg-white rounded-lg shadow-lg  text-gray-700 p-8 mb-8">
                        <Form inline={true} model={this.state.form} onSubmit={this.onSubmit.bind(this)} className="demo-form-inline">
                          <Form.Item>
                            <Input value={this.state.form.user} placeholder="Teacher Name" onChange={this.onChange.bind(this, 'user')}></Input>
                          </Form.Item>
                          <Form.Item>
                            <Select value={this.state.form.region} placeholder="Gender">
                              <Select.Option label="Female" value="Female"></Select.Option>
                              <Select.Option label="Male" value="Male"></Select.Option>
                              <Select.Option label="Both" value="Both"></Select.Option>
                            </Select>
                          </Form.Item>
                          <Form.Item>
                            <Select value={this.state.form.region} placeholder="Speak">
                              <Select.Option label="Zone 1" value="Japanese"></Select.Option>
                              <Select.Option label="Zone 2" value="Chinese"></Select.Option>
                            </Select>
                          </Form.Item>
                          <Form.Item>
                            <DateRangePicker
                                isShowTime={true}
                                value={this.state.form.date}
                                placeholder="Pick a range"
                                onChange={date=>{
                                  console.debug('DateRangePicker1 changed: ', date)
                                  this.setState({form:{date: date}})
                                }}
                                />    
                          </Form.Item>
                          <Form.Item>
                            <Button nativeType="submit" type="primary">Search</Button>
                          </Form.Item>
                        </Form>
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
                                              <div className="w-full sm:w-auto lg:w-1/5 px-4 py-4">
                                                <img className="ml-auto mr-auto my-4 shadow-lg w-30 h-30 object-cover rounded-full border-gray-400 border-solid border-2" src="https://25again.com/wp-content/uploads/2019/07/side-profile-guy.jpg" />
                                                <div className="py-1 flex justify-center items-center">
                                                        <Rate disabled={true} value={4.5} showText={true}/>
                                                </div>
                                                <div className="pt-4 flex-1 flex justify-center items-center">
                                                    {/* <Button type="primary" icon="edit"></Button> */}
                                                    <Link to="/teacherdetail">
                                                    <Button onClick={this.onClick}  type="success">Book</Button>
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
                                              <div className="w-full lg:w-1/2">
                                                <Tabs activeName="1" onTabClick={ (tab) => console.log(tab.props.name) }>
                                                  <Tabs.Pane label="Intro" name="1">
                                                    <div className="">
                                                      <p className="text-sm font-thin">
                                                      大学在校期间进修了倍乐生商贸Benesse（旧福武书店）批阅老师，以后继续担任家教，同时从一对多或一对一辅导取得了各种各样的私塾老师经验。我妻子是中国人，我自己也取得了新HSK6级资格。现在也教日本人学习汉语，到现在为止也一直教中国人日语。 妻は中国人で日本人に中国語を教えており、わたし自身も新HSK6級を取得し日本人に中国語を教えています。現在は中国に長期出張中につき、オンライン日本語教師や翻訳またライターをさせていただいています。
                                                      </p>
                                                    </div>
                                                  </Tabs.Pane>
                                                  <Tabs.Pane label="Video" name="2">
                                                      <div className="">
                                                      <iframe width="480" height="270" src="https://www.youtube.com/embed/cudYDTQFyt8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                      </div>
                                                  </Tabs.Pane>
                                                </Tabs>
                                              </div>
                                              
                                      </div>
                                  </div>
                                </div>
                              ))
                            }
                        </div>
                      </div>
                    {/* <div className="w-full md:w-1/2  lg:w-1/3 px-8">
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
                                        <div className="pt-4 flex justify-end items-center">
                                            <Button type="primary" icon="edit"></Button>
                                            <Button type="success">Enter</Button>
            
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div> */}

                </div>
            </div>
         );
    }
}
 
export default Teacher;
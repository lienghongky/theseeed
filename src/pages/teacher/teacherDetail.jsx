import React, { Component } from 'react';
import Bar from '../../layout/bar';
import SideBar from '../../layout/sideBar';

import { Button, Icon, Rate, Notification, Tabs, Tag, Form, Select, Input, Steps, DatePicker, Dialog} from 'element-react';
import Schedule from './schedule';

class TeacherDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab:'1',
            dialogVisible:false,
            form:{
                content:'Any',
                category:'Any',
                note:'',
                date:null
            },
            formData:{
                contents:[
                    {
                        id:1,
                        title:'Self Chosen'
                    },
                    {
                        id:2,
                        title:'Conversation'
                    },
                    {
                        id:3,
                        title:'Text Book'
                    }
                ],
                categories:[
                    {
                        id:1,
                        title:'Sport'
                    },
                    {
                        id:2,
                        title:'Art'
                    },
                    {
                        id:3,
                        title:'Tech'
                    }
                ]
            }
                
            
          }
    }
    submitRating(e){
        Notification({
            title: 'Thank you for your reviewing!',
            message: 'Your experience infomation is importance to us',
            offset: 100,
            type: 'success',
            // onClose:()=>{this.props.history.push('/student')}
          });
    }
    onSubmit(e) {
        e.preventDefault();
      }
    openSuccess() {
        Notification({
            title: 'Congradulation!',
            message: 'You have suceefully book a lesson',
            offset: 100,
            type: 'success',
            onClose:()=>{this.props.history.push('/student')}
          });
      
      }
      
      onChange(key, value) {
        console.log(key,'==>',value)
        this.setState({
          form: Object.assign(this.state.form, { [key]: value })
        });
      }
    render() { 
        return ( 
            <div className="bg-gray-200 min-h-full  flex">
                <Bar className="sm:hidden"/>
                <SideBar className="hidden sm:static"/>
                <div className=" flex flex-wrap pt-30">
                <div className="w-full sm:w-2/3 px-4">
                                    <div className="bg-white p-8 rounded-lg">
                                      <div className="flex flex-wrap ">
                                              <div className="w-full sm:w-auto px-4 py-4">
                                                <img className="ml-auto mr-auto my-4 shadow-lg w-30 h-30 object-cover rounded-full border-gray-400 border-solid border-2" src="https://25again.com/wp-content/uploads/2019/07/side-profile-guy.jpg" />
                                                
                                                <div className="pt-4 flex-1 flex justify-center items-center">
                                                    {/* <Button type="primary" icon="edit"></Button> */}
                                                    
                    
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
                                              <div className="w-full sm:w-2/5 flex-col">
                                                <div className="py-4 flex-1 flex justify-start sm:justify-end items-center">
                                                    <Button type="primary" icon="star-on"></Button>
                                                    <Button type="primary" icon="more"></Button>
                                                </div>
                                                <div className="py-1 flex justify-start sm:justify-end items-center">
                                                            <Rate disabled={true} value={4.5} showText={true}/>
                                                </div>
                                                
                                                <ul className="text-sm space-y-2 font-light text-left sm:text-right">
                                                        <li><p className="text-gray-600 justify-self-start sm:justify-self-end">Students: <span className="text-black">2055</span></p></li>
                                                        <li><p className="text-gray-600">Lessons: <span className="text-black ">30000</span></p></li>
                                                        
                                                </ul>
                                              </div>
                                              <div className="w-full">
                                                <Tabs activeName="1" onTabClick={ (tab) => console.log(tab.props.name) }>
                                                  <Tabs.Pane label="Intro" name="1">
                                                    <div className="">
                                                      <p className="text-sm font-thin">
                                                      About Me
italki teacher since Feb 9, 2015
I am a native Japanese speaker. I completed Master of Arts Applied Linguistics Specialized in Japanese and Graduate Diploma in Education (Japanese and ESL) in Australia. I am a certified Japanese teacher and have taught in secondary schools in Melbourne. I am happy to talk about topics of your choice in Japanese as well as some basic daily conversation. If you would like to focus on grammar or something specific, I am happy to create a material to help your Japanese. So, I encourage you to let me know what your goals are so that I can support you better. Please feel free to contact me or just try a trial lesson. I look forward to hearing from you. Happy Japanese learning:)


Please note the following things:

When students don't come to their lesson at a session time for 20 minutes, the lesson will be canceled and it will be charged full amount. The lesson credit will not be refunded and the lesson will not be rescheduled. 

Also, please remember to give me more than 24 hour notice when you need to reschedule or cancel your lesson. If you give me a short notice (less than 24 hours), I will not be able to reschedule/cancel.  This is because italki doesn’t let anyone book a lesson without 24 hour notice, and I cannot fill the spot if students cancel/reschedule a lesson with a short notice. Thank you for your understanding.
                                                      大学在校期间进修了倍乐生商贸Benesse（旧福武书店）批阅老师，以后继续担任家教，同时从一对多或一对一辅导取得了各种各样的私塾老师经验。我妻子是中国人，我自己也取得了新HSK6级资格。现在也教日本人学习汉语，到现在为止也一直教中国人日语。 妻は中国人で日本人に中国語を教えており、わたし自身も新HSK6級を取得し日本人に中国語を教えています。現在は中国に長期出張中につき、オンライン日本語教師や翻訳またライターをさせていただいています。
                                                      </p>
                                                      <div className="pt-8">
                                                            <h3 className="font-bold py-4">Resume</h3>
                                                            <div className="flex flex-wrap">
                                                                <div className="w-1/3 px-2">
                                                                    <h4 className="text-sm">Experiences</h4>
                                                                    <p className="text-sm font-thin">
                                                                        2010 - 2010
                                                                        Japanese Assistant Teacher Xavier College
                                                                        2011 - 2012
                                                                        Japanese Teacher Salesian College, Rupertswood
                                                                        2013 - 2013
                                                                        Japanese Teacher Wesley College
                                                                        2014 - 2014
                                                                        Japanese Teacher Haileybury
                                                                    </p>
                                                                </div>
                                                                <div className="w-1/3 px-2">
                                                                    <h4 className="text-sm">Education</h4>
                                                                    <p className="text-sm font-thin">
                                                                    2009 - 2009
                                                                    Other - Education (LOTE Japanese and ESL)
                                                                    2007 - 2008
                                                                    Master's - Applied Linguistics
                                                                    2003 - 2007
                                                                    Bachelor's - Bachelor of Arts in Comperative Culture
                                                                    </p>
                                                                </div>
                                                                <div className="w-1/3 px-2">
                                                                    <h4 className="text-sm">Certificates</h4>
                                                                    <p className="text-sm font-thin">
                                                                     JLPT N1, N2, N3, N4, N5
                                                                    </p>
                                                                </div>
                                                            </div>
                                                      </div>
                                                    </div>
                                                  </Tabs.Pane>
                                                  <Tabs.Pane label="Schedule" name="2">
                                                      <Schedule/>
                                                  </Tabs.Pane>
                                                  <Tabs.Pane label="Review" name="3">
                                                      <div className="">
                                                          
                                                        <h3 className="py-6">How is your experiences with our teacher!</h3>
                                                      <Rate
                                                        showText={true}
                                                        texts={['oops', 'disappointed', 'normal', 'good', 'great']}
                                                        />
                                                    <Input
                                                        className="mt-8"
                                                        type="textarea"
                                                        autosize={{ minRows: 4, maxRows: 8}}
                                                        placeholder="Please input"
                                                    />
                                                    <div className="flex justify-end items-center py-6">
                                                        <Button onClick={this.submitRating}>Submit</Button>
                                                    </div>
                                                    <div className="flex flex-col">
                                                            {
                                                                [1,2,3,4,5,6].map((e,index)=>(
                                                                    <div className="bg-gray-100 rounded-lg p-4 my-4 flex justify-end items-center">
                                                                        <img className="ml-auto mr-auto my-4 shadow-lg w-20 h-20 object-cover rounded-full border-gray-400 border-solid border-2" src="https://25again.com/wp-content/uploads/2019/07/side-profile-guy.jpg" />
                                                                        <div className="flex-1 pl-4">
                                                                        <h3 className="font-bold text-lg">REVIEWER***NICKNAME</h3>
                                                                        <div className="py-1 flex justify-start items-center">
                                                                            <Rate disabled={true} value={4.5} showText={true}/>
                                                                        </div>
                                                                        <p
                                                                            className="text-light text-black"
                                                                        >
                                                                            It was very easy to listen to English, and the questions were handled carefully. It was a request less than 24 hours, but it was helpful to answer.
                                                                            I took the lesson of the instructor after a long time. We talked about recent events around us. I would like to increase my expressions and vocabulary so that I can spread the story on various topics. Also thank you next time.</p>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            }
                                                          </div>
                                                      </div>
                                                  </Tabs.Pane>

                                                </Tabs>
                                              </div>
                                              
                                      </div>
                                  </div>
                                </div>
                <div className="w-full sm:w-1/3 px-4">
                    <div className="sticky">
                        <div className="bg-white font-light rounded-lg shadow-lg p-4">
                            <ul className="text-lg space-y-2  text-center py-8">
                                <li><p className="text-gray-600">Duration: </p><span className="text-gray-900 text-5xl font-bold">30min</span></li>
                                <li><p className="text-gray-600">Tickets: </p><span className="text-red-400 text-lg">1</span></li>
                            </ul>
                            <div className="">
                            <Form  model={this.state.form} onSubmit={this.onSubmit.bind(this)} labelWidth="" className="">
                          
                          <Form.Item>
                            <Select 
                            className="w-full"
                            onChange={this.onChange.bind(this, 'content')}
                            value={this.state.form.content} 
                            placeholder="Content">
                              {this.state.formData.contents.map((e,index)=>
                              (
                                <Select.Option key={e.title} label={e.title} value={e.title}></Select.Option>
                              ))}
                            </Select>
                          </Form.Item>

                          <Form.Item>
                            <Select
                             className="w-full"
                             value={this.state.form.category} 
                             onChange={this.onChange.bind(this, 'category')}
                             placeholder="Category">
                                {
                                    this.state.formData.categories.map((e,index)=>(
                                        <Select.Option key={e.title} label={e.title} value={e.title}></Select.Option>
                                    ))
                                }
                                
                            </Select>
                          </Form.Item>
                          <Form.Item >
                            <DatePicker
                                className="w-full"
                                isShowTime={true}
                                value={this.state.form.date}
                                placeholder="Pick a Date and Time"
                                onChange={date=>{
                                  console.debug('DateRangePicker1 changed: ', date)
                                  this.setState({form:{date: date}})
                                }}
                                />    
                          </Form.Item>
                          <Form.Item>
                            <Input className="w-full"  type="textarea" autosize={true} value={this.state.form.note} placeholder="note" onChange={this.onChange.bind(this, 'note')}></Input>
                          </Form.Item>
                          
                          <Form.Item>
                            <Button onClick={ () => this.setState({ dialogVisible: true }) } className="w-full" size="large" type="primary" >Book Now</Button>
                                <Dialog
                                    title="Booking info"
                                    visible={ this.state.dialogVisible }
                                    onCancel={ () => this.setState({ dialogVisible: false }) }
                                >
                                    <Dialog.Body>
                                    {this.state.dialogVisible && (
                                        <div className="">
                                            <div className="bg-gray-100 rounded-lg  p-8">
                                                <div className="flex flex-wrap ">
                                                        <div className="w-full sm:w-auto ">
                                                            <img className="ml-auto mr-auto my-4 shadow-lg w-30 h-30 object-cover rounded-full border-gray-400 border-solid border-2" src="https://25again.com/wp-content/uploads/2019/07/side-profile-guy.jpg" />
                                                            <div className="py-1 flex justify-center items-center">
                                                                    <Rate disabled={true} value={4.5} showText={true}/>
                                                            </div>
                                                            <div className="pt-4 flex-1 flex justify-center items-center">
                                                                {/* <Button type="primary" icon="edit"></Button> */}
                                                               
                                
                                                            </div>
                                                        </div>
                                                        <div className="flex-1 pl-4">
                                                                <h3 className="text-lg font-bold text-black">TEACHER NAME</h3>
                                                                <ul className="flex-1 pt-1 space-y-1 font-light">
                                                                    <li><p className="text-gray-600">Gender: <span className="text-black text-lg">Male</span></p></li>
                                                                    <li><p className="text-gray-600">Native: <span className="text-black text-lg">Japanese</span></p></li>
                                                                    <li><p className="text-gray-600">Also Speak: <span className="text-black text-lg">Chinese | English</span></p></li>
                                                                </ul>

                                                        </div>
                                                        
                                                        
                                                </div>
                                            </div>
                                            <div className="bg-gray-100 rounded-lg  p-8 mt-4">
                                            <ul className="flex-1 pt-1 space-y-1 font-light">
                                                                    <li><p className="text-gray-600">Tickets: <span className="text-red-500 ">-1</span></p></li>
                                                                    
                                                                </ul>
                                            </div>
                                            <div className="bg-gray-100 rounded-lg  p-8 mt-4">
                                            <ul className="flex-1 pt-1 space-y-1 font-light">
                                                                    <li><p className="text-gray-600">Date: <span className="text-black ">{new Date(this.state.form.date).toLocaleDateString()}</span></p></li>
                                                                    <li><p className="text-gray-600">Time: <span className="text-black ">{new Date(this.state.form.date).toLocaleTimeString()}</span></p></li>
                                                                    <li><p className="text-gray-600">Duration: <span className="text-black ">30min</span></p></li>
                                                                    <li><p className="text-gray-600">Content: <Tag type="gray">{this.state.form.content}</Tag></p></li>
                                                                    <li><p className="text-gray-600">Category: <Tag type="gray">{this.state.form.category}</Tag></p></li>
                                                                    <li><p className="text-gray-600">Note:</p></li>
                                                                    <li><p className="text-gray-900">{this.state.form.note}</p></li>
                                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                    </Dialog.Body>
                                    <Dialog.Footer className="dialog-footer">
                                        <Button onClick={ () => this.setState({ dialogVisible: false }) }>Cancel</Button>
                                        <Button type="primary" onClick={ () => {this.setState({ dialogVisible: false }); this.openSuccess();} }>Confirm</Button>
                                    </Dialog.Footer>
                                </Dialog>
                          </Form.Item>
                        </Form>
                        </div>
                            
                            <div className="flex justify-center pt-4 space-x-4 text-indigo-500">
                                     <a>Report</a>
                                     <a>Contact</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
         );
    }
}
 
export default TeacherDetail;
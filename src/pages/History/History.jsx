import { Button, Icon, Rate, Table, Tabs, Tag } from 'element-react';
import React, { Component } from 'react';
import Bar from '../../layout/bar';
import SideBar from '../../layout/sideBar';

class History extends Component {
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
        return ( 
            <div className="min-h-full flex bg-gray-200">
                <Bar className="sm:hidden"/>
                <SideBar className="hidden sm:static"/>
                        <div className="flex-1 pt-30 sm:pl-10">
                            <div className=" flex flex-wrap justify-start items-center pb-10 px-16">
                                {
                                    [3,2,1].map((e,index)=>(
                                        <div className=" flex justify-center items-center mx-2">
                                            <div className="bg-white rounded-lg shadow-lg p-4 border-2 border-solid border-indigo-500">
                                                <div className="text-center">
                                                    <h4 className=" text-sm  ">TOTAL LESSONS</h4>
                                                    <h1 className=" text-gray-800 text-4xl font-bold py-2">23</h1>
                                                    <h4 className=" text-sm font-light pt-4">30 Days</h4>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="flex flex-wrap justify-center  ">
                                <div className="w-11/12 bg-white rounded-lg shadow-lg py-4 mb-8 ">
                                    <Tabs activeName="1" onTabClick={ (tab) => console.log(tab.props.name) }>
                                        <Tabs.Pane label="Booked" name="1">
                                            <div className="p-2">
                                            <Table
                                                style={{width: '100%'}}
                                                columns={this.state.columns}
                                                data={this.state.data}
                                                border={false}
                                                onCurrentChange={item=>{console.log(item)}}
                                                />
                                            </div>
                                        </Tabs.Pane>
                                        <Tabs.Pane label="History" name="2">
                                            <div className="p-2">
                                                <Table
                                                    style={{width: '100%'}}
                                                    columns={this.state.columns}
                                                    data={this.state.histories}
                                                    border={false}
                                                    onCurrentChange={item=>{console.log(item)}}
                                                    />
                                            </div>
                                        </Tabs.Pane>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
            </div> 
         
         );
    }
}
 
export default History;
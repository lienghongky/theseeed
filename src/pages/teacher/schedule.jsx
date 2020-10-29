import React, { Component } from 'react';
import {Table, Icon, Tag, Button} from 'element-react'


class Schedule extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
          columns: [
            {
              label: "Time",
              prop: "time",
              width: 100,
              render: function(data){
                return (
                <span>
                  <Icon name="time"/>
                  <span style={{marginLeft: '10px'}}>{data.time}</span>
                </span>)
              }
            },
            {
              label: "MON",
              prop: "mon",
              render: function(data){
                    const obj = data.mon !== undefined && data.mon.available ? (<Button  type="success" size="small">Book</Button>) : (<Tag> - </Tag>);
                    return (
                        <span className="flex justify-center items-center">{obj}</span>
                    )
              }
            },
            {
              label: "TUE",
              prop: "tue",
              render: function(data){
                const obj = data.tue!== undefined && data.tue.available ? (<Button  type="success" size="small">Book</Button>) : (<Tag> - </Tag>);
                return (
                    <span className="flex justify-center items-center">{obj}</span>
                )
          }
            },
            {
              label: "WEN",
              prop: "wen",
              render: function(data){
                const obj = data.wen !== undefined && data.wen.available ? (<Button  type="success" size="small">Book</Button>) : (<Tag> - </Tag>);
                return (
                    <span className="flex justify-center items-center">{obj}</span>
                )
          }
            },
            {
              label: "THU",
              prop: "thu",
              render: function(data){
                const obj = data.thu !== undefined && data.thu.available ? (<Button  type="success" size="small">Book</Button>) : (<Tag> - </Tag>);
                return (
                    <span className="flex justify-center items-center">{obj}</span>
                )
          }
            },,
            {
              label: "FRI",
              prop: "fri",
              render: function(data){
                const obj = data.fri !== undefined && data.fri.available ? (<Button  type="success" size="small">Book</Button>) : (<Tag> - </Tag>);
                return (
                    <span className="flex justify-center items-center">{obj}</span>
                )
          }
            },
            {
              label: "SAT",
              prop: "sat",
              render: function(data){
                const obj = data.sat !== undefined && data.sat.available ? (<Button  type="success" size="small">Book</Button>) : (<Tag> - </Tag>);
                return (
                    <span className="flex justify-center items-center">{obj}</span>
                )
          }
            },
            {
              label: "SUN",
              prop: "sun",
              render: function(data){
                const obj = data.sun !== undefined && data.sun.available ? (<Button  type="success" size="small">Book</Button>) : (<Tag> - </Tag>);
                return (
                    <span className="flex justify-center items-center">{obj}</span>
                )
          }
            }
          ],
          data: [{
            time: '1:00',
            mon: {
                available:true,

            },
            tue: {
                available:true,
                
            },
            wen: {
                available:true,
                
            },
            thu: {
                available:true,
                
            },
            fri: {
                available:true,
                
            },
            sat: {
                available:true,
                
            },
            sun: {
                available:true,
                
            }

          },
          {
            time: '2:00',
            mon: {
                available:true,

            },
            tue: {
                available:true,
                
            },
            wen: {
                available:true,
                
            },
            thu: {
                available:true,
                
            },
            fri: {
                available:true,
                
            },
            sat: {
                available:false,
                
            },
            sun: {
                available:false,
                
            }

          },
          {
              time:'3:00'
                
          },
        {
            time:'4:00',
            sat: {
                available:true,
                
            },
            sun: {
                available:true,
                
            }
        },...Array(21).fill(4).map((x, y) => ({
            time:`${x + y}:00`
            }))
    
    ]
        }

    
      }
      
      render() {
        return (
          <Table
            style={{width: '100%'}}
            columns={this.state.columns}
            data={this.state.data}
            border={true}
            highlightCurrentRow={true}
            onCurrentChange={item=>{console.log(item)}}
          />
        )
      }
}



export default Schedule;

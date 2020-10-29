import React, { Component } from 'react';
import { Loading,Tag } from 'element-react';
import TeacherProfile from '../home/teacherProfile';

const JitsiMeetExternalAPI = window.JitsiMeetExternalAPI;


class Live extends Component {
    constructor(props) {
        super(props);

        this.state = {
            api:null,
            room:'FLATJAR_ROOM_1222',
            username:'Student1'

        }
    }
    componentDidMount(e){
        this.openRoom();
    }
    startConference() {
        var _this = this
        try {
            const domain = "meet.jit.si";
            const options = {
                // audioInput: '<deviceLabel>',
                // audioOutput: '<deviceLabel>',
                // videoInput: '<deviceLabel>',
                roomName: this.state.room,
                height: 700,
                parentNode: document.getElementById('jitsi-container'),
                interfaceConfigOverwrite: {
                    filmStripOnly: false,
                    SHOW_JITSI_WATERMARK: false,
                },
                configOverwrite: {
                    disableSimulcast: false,
                },
                userInfo: {
                    displayName: this.state.username
                }
            };

            this.state.api = new JitsiMeetExternalAPI(domain, options);
            
        } catch (error) {
            console.error('Failed to load Jitsi API', error);
        }
    }
    openRoom() {
        // verify the JitsiMeetExternalAPI constructor is added to the global..
        if (window.JitsiMeetExternalAPI) {
            // var person = prompt("Please enter your name:", "STUDENT");
            // if (person != null || person != "")
            // this.state.username = person
            // this.state.room = prompt("Please enter your room:", "FLATJAR_ROOM_1222");
                
            if (this.state.room != null || this.state.room != "")
                this.startConference();
        } else alert('Jitsi Meet API script not loaded');
    }
    render() {
        return (
            <div className="h-full w-full py-20 flex flex-wrap">
                 
                <div className="w-full lg:2/3 flex justify-center items-center" >
                     <div className="w-full h-full bg-black" id="jitsi-container"></div>
                </div>
                
                
                <div className="w-full lg:1/3 flex justify-center items-center py-4">
                    <div className="rounded-lg shadow-lg flex">
                        <TeacherProfile/>
                        <ul className="flex-1 pt-8 px-8 pr-20 bg-gray-200 space-y-1 font-light">
                            <li><p className="text-gray-600">Date: <span className="text-black ">{new Date().toLocaleDateString()}</span></p></li>
                            <li><p className="text-gray-600">Time: <span className="text-black ">{new Date().toLocaleTimeString()}</span></p></li>
                            <li><p className="text-gray-600">Duration: <span className="text-black ">30min</span></p></li>
                            <li><p className="text-gray-600">Content: <Tag type="gray">Text Book</Tag></p></li>
                            <li><p className="text-gray-600">Category: <Tag type="gray">Sport</Tag></p></li>
                            <li><p className="text-gray-600">Note:</p></li>
                            <li><p className="text-gray-900">Favorite Sport</p></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        );
    }
}





export default Live;

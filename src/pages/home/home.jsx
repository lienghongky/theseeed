import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Hightlight from './hightlight';
import TeacherProfile from './teacherProfile';
import {Icon,Carousel, Rate} from 'element-react'
import Price from '../plan/price';
import '../../assets/styles/utility.css';
import { ReactComponent as HeroImage } from '../../assets/icons/teacher.svg'



class Home extends Component {
    state = {  }
    render() { 
        var teachers = [
            {
                name:'TEACHER NAME',
                session:50,
                languages:['JAPANESE'],
                profile:'https://profiles.sulekha.com/mstore/41473532/albums/default/thumbnailfull/shutterstock-1537715831.jpg'
            },
            {
                name:'TEACHER NAME',
                session:50,
                languages:['JAPANESE'],
                profile:'https://profiles.sulekha.com/mstore/41473532/albums/default/thumbnailfull/shutterstock-1537715831.jpg'
            },
            {
                name:'TEACHER NAME',
                session:50,
                languages:['JAPANESE'],
                profile:'https://profiles.sulekha.com/mstore/41473532/albums/default/thumbnailfull/shutterstock-1537715831.jpg'
            },
            {
                name:'TEACHER NAME',
                session:50,
                languages:['JAPANESE'],
                profile:'https://profiles.sulekha.com/mstore/41473532/albums/default/thumbnailfull/shutterstock-1537715831.jpg'
            }
        ];
        var hightlights = [
            {
                id:1,
                icon:'https://www.import.io/wp-content/uploads/2018/04/Rocket-icon-blue-1-300x300.png',
                title:'Service',
                description:'Focusing on Japaness only'
            },
            {
                id:2,
                icon:'https://www.import.io/wp-content/uploads/2018/04/Rocket-icon-blue-1-300x300.png',
                title:'24/7 Class',
                description:'Available 24/7'
            },
            {
                id:3,
                icon:'https://www.import.io/wp-content/uploads/2018/04/Rocket-icon-blue-1-300x300.png',
                title:'Quick Support',
                description:'Focusing on Japaness only'
            },
            {
                id:4,
                icon:'https://www.import.io/wp-content/uploads/2018/04/Rocket-icon-blue-1-300x300.png',
                title:'Native Speaker',
                description:'Focusing on Japaness only'
            }
        ]
        return ( 
        <div className="">
           <div className="flex flex-wrap-reverse h-full py-32">
                <div className="w-full sm:w-1/2 flex items-center justify-center py-10">
                        <div className="space-y-10 px-4">
                            <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Ready to dive in?
                                <br/>
                                <span className="text-indigo-600">Start your first class today.</span>
                            </h2>
                            <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
                                <div className="inline-flex rounded-md shadow">
                                    <Link to="/teachers" href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                    Get started
                                    </Link>
                                </div>
                                <div className="ml-3 inline-flex rounded-md shadow">
                                    <Link to="/" href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                    Learn more
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 flex items-center justify-center h-64 sm:h-full">
                    {/* <img src="" alt=""/> */}
                    <HeroImage/>
                    </div>
                
           </div>
           
           <div className="px-10 py-10 sm:py-20 bg-gray-200">
           <Hightlight/>
           </div>
           <div className="w-full py-10 sm:py-32 ">
                <div className="w-full">
                    <Carousel interval="4000" type="card" >
                    {teachers.map((item,index)=>
                        (
                            <Carousel.Item key={index}>
                                <div className="w-full h-full p-2">
                                    <div className="bg-indigo-700 shadow-lg">
                                    <img className="object-cover" src="https://image.freepik.com/free-vector/online-classes-kids-banner_48159-732.jpg" alt=""/>
                                    </div>
                                    
                                </div>
                            </Carousel.Item>
                            )
                        
                    )}
                    </Carousel>
                </div>
           </div>
           <div className="  bg-gray-200 py-10">
                    <h3 className="text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    Over <span className="text-red-500">10000+</span> teachers.
                    </h3>
                    <p className="text-center mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                        All native Speakers.
                    </p>
               
               <div className="flex flex-wrap justify-center p-8 sm:px-20">
                {teachers.map((e)=>
                    <div className="w-full sm:w-1/2 p-2" key={e}>
                        <TeacherProfile/>
                    </div>
                )}
               </div>
               <div className="py-20 flex justify-center items-center">
               <div className="justify-center">

                    <p className="text-center m-4 max-w-2xl text-2xl leading-7 text-gray-700 lg:mx-auto">
                            See More Teachers.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/teachers">
                            <button className="text-white  bg-indigo-600 p-4 px-8 rounded-lg shadow-lg m-4">See More</button>
                        </Link>
                    </div>
                </div>
               </div>
           </div>
           <div className="py-10 ">
               <h1 className="text-center text-3xl pt-20 font-bold">Over <span className="text-red-500">30000+</span> Students</h1>
               <div className="flex flex-wrap justify-center p-2 sm:p-8  sm:px-12 overflow-hidden overflow-x-auto">
                {[1,2,3,4,5].map((e,index)=>
                    <div className="w-full sm:w-1/2 p-2 sm:p-4 floating" key={index}>
                        <div className="flex shadow-xl  bg-white">
                            <img className="w-1/2 object-cover" src="https://previews.123rf.com/images/antonioguillem/antonioguillem1707/antonioguillem170700045/82074335-happy-student-looking-at-you-with-thumbs-up-in-a-classroom-with-classmates-in-the-background.jpg" alt=""/>
                            <div className="w-1/2 p-4">
                                <h4>Student Name</h4>
                                <p className="font-thin text-gray-500">120 Lessons</p>
                                <div className="py-1 flex justify-start items-center">
                                                        <Rate disabled={true} value={4.5} showText={true}/>
                                                </div>
                                <p className="text-gray-600">
                                これは私の最初のレッスンです。 非常にべんきょうになりました。 はなしたくさん練習できました。 一生懸命勉強します。
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                 
               </div>
               <div className="flex justify-center">
                    <button className="text-white  bg-indigo-600 p-4 px-8 rounded-lg shadow-lg m-4">See More</button>
                </div>
           </div>

           <div className="  bg-gray-200 px-20 py-10">
                            <h3 className="text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
                                Start your <span className="text-red-500">Free Plan</span> Now!
                            </h3>
                            <p className="text-center mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                                Choose your prefers of plans. 
                            </p>
               <div className="py-20">
                    <Price/>
               </div>
           </div>
        </div> 
        );
    }
}
 
export default Home;

import React, {useState} from 'react';

const Tabs = () => {
    const tabs = [
        {
            id:1,
            title:'Today',
            icon:'menu'
        },
        {
            id:2,
            title:'Weekly',
            icon:'menu'
        },
        {
            id:3,
            title:'Monthly',
            icon:'menu'
        },
        {
            id:4,
            title:'Socail',
            icon:'menu'
        },
        {
            id:5,
            title:'Sport',
            icon:'menu'
        },
        {
            id:6,
            title:'Sport',
            icon:'menu'
        },
        {
            id:7,
            title:'Sport',
            icon:'menu'
        }
    ]
    const [selectedTab,setSelectedTab] = useState(tabs[0]);
    const tabsComponent = tabs.map((e,index)=>(
        <div key={index} onClick={()=>setSelectedTab(e)} className="relative transistion duration-100 cursor-pointer px-4 border border-t-0 border-r-0 border-l-0 border-solid">
            <p className={`text-lg font-medium hover:text-red-600 ${selectedTab.id === e.id && "text-red-600 border-red-600 border-2 border-t-0 border-r-0 border-l-0 border-solid"}`}>{e.title}</p>
        </div>
    ))
    return (
        <div className="flex overflow-scroll hideScrollBar">
           {tabsComponent}
        </div>
    );
}

export default Tabs;

import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTages } from '../../redux/post/action';


const Tabs = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTages())
        console.log('Fetch tage')
    }, []);
    const tabs = useSelector(state => state.post.tages)
    const [selectedTab,setSelectedTab] = useState({
        text:"All",
        id:1,
        color:''
    });
    useEffect(()=>{
        if(selectedTab ==null){
            setSelectedTab(tabs !== undefined && tabs !== undefined && tabs.lenght > 0 ? tabs[0]:null)
        }
    },[tabs])
    
    const tabsComponent = tabs !== undefined && tabs !== null && tabs.map((e,index)=>(
        <Link onClick={()=>setSelectedTab(e)} key={index} to={`/home/${e.text}`}>
            <div   className="relative transistion duration-100 cursor-pointer px-4 border border-t-0 border-r-0 border-l-0 border-solid">
                <p className={`text-lg font-medium hover:text-red-600 ${selectedTab !== null && selectedTab.text === e.text && "text-red-600 border-red-600 border-2 border-t-0 border-r-0 border-l-0 border-solid"}`}>{e.text}</p>
            </div>
        </Link>
    ))
    return (
        <div className="flex overflow-scroll hideScrollBar">
           {tabsComponent}
        </div>
    );
}

export default Tabs;

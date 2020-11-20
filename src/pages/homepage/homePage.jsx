import React,{ useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {fetchMiniPosts, fetchPosts} from '../../redux/post/action'
import {Link as RouteLink} from 'react-router-dom'
import {RichText, Date  } from 'prismic-reactjs'
import {client, linkResolver } from '../../prismic-configuration'
import Tabs  from './tabs'
const HomePage = ({match}) => {
    const [PageData, setPageData] = useState(null);
    const dispatch = useDispatch()
    const posts = useSelector(state => state.post.posts)
    const miniPosts = useSelector(state => state.post.miniPosts)
    const logo = useSelector(state => state.nav.logo)
    const fetchData = ()=>{
      client.getSingle('homepage').then((res)=>{
      setPageData(res.data)
      console.log(res)
      }).catch(error=>{
        console.log(error)
      })
  }
    const tage = match.params.uid
    useEffect(()=>{
        dispatch(fetchPosts(tage))
        dispatch(fetchMiniPosts())
        fetchData()

    },[tage])

    const bannerComponent = PageData && PageData.body.map((slice, index)=>{
      if(slice.slice_type == 'banner_with_caption'){
          return (
              <a href={slice.primary.button_link.url} target="_blank" className="w-full flex flex-col items-center justify-center overflow-hidden shadow-md bg-white transition duration-100 transform hover:scale-95">
                      <img className="w-full h-2/3 overflow-x-hidden object-cover" src={slice.primary.image_banner.url} alt=""/>
                      <div className="py-4">
                      <h1 className="text-sm text-gray-800 text-center">{RichText.asText(slice.primary.title_of_banner,linkResolver)}</h1>
                      <p className="text-sm font-thin text-gray-600 text-center">{RichText.asText(slice.primary.description,linkResolver)}</p>
                      {/* <a href={slice.primary.button_link.url} target="_blank" className=""><p className="p-1 px-4 mt-4 text-gray-600  border border-gray-600 border-solid rounded-lg text-sm">{RichText.asText(slice.primary.button_label,linkResolver)}</p></a> */}
                      </div>
              </a>
          )
      }
  })

    const blogContent = posts && posts.map((post,index)=>(
      <div key={index+10} className="flex flex-wrap p-4 m-4 relative">
        <div className="w-full sm:w-2/5">
            {/* <div className="w-64 h-64 overflow-hidden"> */}
            <img className="w-full h-64 object-cover" src={post.thumbnail.url} alt=""/>
            {/* </div> */}
        </div>
        <div className="flex-1 sm:px-4 pb-20 sm:pb-0">
          <div className="text-gray-900 text-2xl font-bold leading-none">
              {RichText.asText(post.title)}
          </div>
          <p className="text-xs text-red-800 py-2">
              <span className="">Author: {post.author} </span> | <span className="font-light">{`${new Date(post.datetime).toDateString()} ${new Date(post.datetime).toLocaleTimeString()}`}</span>
          </p>
          <div className="text-sm text-gary-600 font-light pt-2 overflow-hidden">
              {RichText.asText(post.subtitle)}
          </div>

          <div className="absolute bottom-0 pb-4 text-xs font-bold text-gray-900 flex-1 flex items-end">
            <RouteLink   to={`/detail/${post.id}`}><div className=" hover:bg-red-600 hover:text-white py-1 px-4 mx-1 border border-solid ">READ</div></RouteLink>
            {/* <RouteLink   to="/login"><div className=" hover:bg-red-600 hover:text-white py-1 px-4 mx-1 border border-solid ">SAVE</div></RouteLink> */}
              {/* {RichText.render(item.content)} */}
          </div>
        </div>
    </div>
    ));

      const smBlogContent = miniPosts && miniPosts.map((post,index)=>(
        <div key={index+10} className="flex flex-wrap p-4 relative border border-t-0 border-l-0 border-r-0">
                    <div className="flex-1 sm:px-4 pb-10">
                      <div className="text-gray-900 text-lg font-bold leading-none">
                          {RichText.asText(post.title)}
                      </div>
                      <p className="text-xs text-red-800 py-2">
                          <span className="">Author:{post.author} </span> | <span className="font-light">{`${new Date(post.datetime).toDateString()} ${new Date(post.datetime).toLocaleTimeString()}`}</span>
                      </p>
                      {/* <div className="text-sm text-gary-600 font-light pt-4">
                          {RichText.render(item.subtitle)}
                      </div> */}

                      <div className="absolute bottom-4 right-4 text-xs font-bold text-gray-900 flex-1 flex items-end justify-end">
                        <RouteLink   to={`/detail/${post.id}`}><div className=" hover:bg-red-600 hover:text-white py-1 px-4 mx-1 border border-solid ">READ</div></RouteLink>
                        {/* <RouteLink   to="/login" target="_blank"><div className=" hover:bg-red-600 hover:text-white py-1 px-4 mx-1 border border-solid ">SAVE</div></RouteLink> */}
                          {/* {RichText.render(item.content)} */}
                      </div>
                    </div>
                </div>
      ));
    
      return (
        <div className="bg-white">
            <img className=' w-full h-30vh object-cover ' src={PageData && PageData.banner.url} />
             <div className="z-100  w-full flex justify-center text-6xl font-bold  py-20 ">
                <h1 className="text-4xl text-red-600">{logo&&logo.text}</h1>
             </div>
             <div className="sm:px-10 px-2"><Tabs/></div>
             <div className="w-full border border-dash border-t-0 border-r-0 border-l-0">
              
             </div>
             <div className="flex flex-wrap divide-x divide-gray-300">
             <div className="w-full sm:w-2/3">
             {blogContent}
             </div>
             <div className="w-full sm:w-1/3">
               <h1 className="text-xl font-bold text-center pt-10 sm:py-4 text-red-600">HOT TOPIC</h1>
              {smBlogContent}
              <div className="flex flex-col items-center">
                {bannerComponent}
              </div>
             </div>
             </div>
        </div>
    );
};



export default HomePage;

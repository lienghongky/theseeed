import React,{ useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {fetchPosts} from '../../redux/post/action'
import {Link as RouteLink} from 'react-router-dom'
import {RichText, Date  } from 'prismic-reactjs'
import {linkResolver } from '../../prismic-configuration'
import Tabs  from './tabs'
const HomePage = () => {
    const dispatch = useDispatch()
    const post = useSelector(state => state.post.posts)
    useEffect(()=>{
        dispatch(fetchPosts())
        
    },[])
    const blogContent = post.body && post.body.map(function(slice, index){
 
        // Render the right markup for the given slice type
   
        // Text Slice
        if (slice.slice_type === 'text') {
          return RichText.render(slice.primary.rich_text, linkResolver);
   
        // Image Gallery Slice
        } else if (slice.slice_type === 'list_of_articles') {
          const galleryContent = slice.items && slice.items.map(function(item, itemIndex){
            return (
                <div key={index+10} className="flex flex-wrap p-4 m-4 relative">
                    <div className="w-full sm:w-2/5">
                        {/* <div className="w-64 h-64 overflow-hidden"> */}
                        <img className="w-full h-64 object-cover" src={item.thumbnail.url} alt=""/>
                        {/* </div> */}
                    </div>
                    <div className="flex-1 sm:px-4 pb-20 sm:pb-0">
                      <div className="text-gray-900 text-xl font-bold leading-none">
                          {RichText.render(item.title1)}
                      </div>
                      <p className="text-xs text-red-800 py-2">
                          <span className="">Author: JONH DF{item.author} </span> | <span className="font-light">{item.publish_date}</span>
                      </p>
                      <div className="text-sm text-gary-600 font-light pt-4">
                          {RichText.render(item.subtitle)}
                      </div>

                      <div className="absolute bottom-0 pb-4 text-xs font-bold text-gray-900 flex-1 flex items-end">
                        <RouteLink   to="/detail/" target="_blank"><div className=" hover:bg-red-600 hover:text-white py-1 px-4 mx-1 border border-solid ">READ</div></RouteLink>
                        <RouteLink   to="/login" target="_blank"><div className=" hover:bg-red-600 hover:text-white py-1 px-4 mx-1 border border-solid ">SAVE</div></RouteLink>
                          {/* {RichText.render(item.content)} */}
                      </div>
                    </div>
                </div>
            )
          });
          
          
          return (
            <div className="image-gallery" key={index}>
              <div className="gallery-title text-2xl font-bold px-4">
                {/* {RichText.asText(slice.primary.title_of_section)} */}
              </div>

              <div className="flex flex-col divide-y">
              {galleryContent}
              </div>
            </div>
          );
   
        // Return null by default
        } else {
          return null;
        } 
      });

      const smBlogContent = post.body && post.body.map(function(slice, index){
 
        // Render the right markup for the given slice type
   
        // Text Slice
        if (slice.slice_type === 'text') {
          return RichText.render(slice.primary.rich_text, linkResolver);
   
        // Image Gallery Slice
        } else if (slice.slice_type === 'list_of_articles') {
          const galleryContent = slice.items && slice.items.map(function(item, itemIndex){
            return (
                <div key={index+10} className="flex flex-wrap p-4 relative border border-t-0 border-l-0 border-r-0">
                    <div className="flex-1 sm:px-4 pb-10">
                      <div className="text-gray-900 text-sm font-bold leading-none">
                          {RichText.render(item.title1)}
                      </div>
                      <p className="text-xs text-red-800 py-2">
                          <span className="">Author: JONH DF{item.author} </span> | <span className="font-light">{item.publish_date}</span>
                      </p>
                      {/* <div className="text-sm text-gary-600 font-light pt-4">
                          {RichText.render(item.subtitle)}
                      </div> */}

                      <div className="absolute bottom-4 right-4 text-xs font-bold text-gray-900 flex-1 flex items-end justify-end">
                        <RouteLink   to="/detail/" target="_blank"><div className=" hover:bg-red-600 hover:text-white py-1 px-4 mx-1 border border-solid ">READ</div></RouteLink>
                        <RouteLink   to="/login" target="_blank"><div className=" hover:bg-red-600 hover:text-white py-1 px-4 mx-1 border border-solid ">SAVE</div></RouteLink>
                          {/* {RichText.render(item.content)} */}
                      </div>
                    </div>
                </div>
            )
          });
          
          
          return (
            <div className="image-gallery" key={index}>
              <div className="gallery-title text-2xl font-bold px-4">
                {/* {RichText.asText(slice.primary.title_of_section)} */}
              </div>

              <div className="flex flex-col">
              {galleryContent}
              </div>
            </div>
          );
   
        // Return null by default
        } else {
          return null;
        } 
      });
    return (
        <div className="">
            <img className=' w-full h-30vh object-cover ' src={post.slider && post.slider.url} />
             <div className="z-100  w-full flex justify-center text-6xl font-bold  py-20 ">
                {RichText.render(post.title, linkResolver)}
             </div>
             <div className="sm:px-10 px-2"><Tabs/></div>
             <div className="w-full border border-dash border-t-0 border-r-0 border-l-0">
              <div className="">
              {/* <Button type="primary">Hello</Button> */}
              </div>
             </div>
             <div className="flex flex-wrap divide-x divide-gray-300">
             <div className="w-full sm:w-2/3">
             {blogContent}
             </div>
             <div className="w-full sm:w-1/3">
               <h1 className="text-xl font-bold text-center pt-10 sm:py-4 text-red-600">HOT TOPIC</h1>
              {smBlogContent}
             </div>
             </div>
        </div>
    );
};



export default HomePage;

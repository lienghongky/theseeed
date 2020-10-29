import React,{ useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {fetchPosts} from '../redux/post/action'
import {Link, RichText, Date  } from 'prismic-reactjs'
import {linkResolver } from '../prismic-configuration'
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
                <div key={index+10} className="flex p-4 m-4 shadow-xl bg-gray-300">
                    <div className="w-2/5 p-2">
                        <div className="w-64 h-64 overflow-hidden">
                        <img className="h-full w-full object-cover" src={item.thumbnail.url} alt=""/>
                        </div>
                    </div>
                    <div className="w-3/5">
                    <div className="gallery-title text-2xl font-bold">
                        {RichText.render(item.title1)}
                    </div>
                    <p className="text-xs text-gray-700">
                        {item.publish_date}
                    </p>
                    <div className="text-sm text-gary-600 font-light">
                        {RichText.render(item.subtitle)}
                    </div>

                    <div className="text-xs text-gray-900">
                        {RichText.render(item.content)}
                    </div>
                    </div>
                </div>
            )
          });
          return (
            <div className="image-gallery" key={index}>
              <div className="gallery-title text-2xl font-bold px-4">
                {RichText.asText(slice.primary.title_of_section)}
              </div>
              {galleryContent}
            </div>
          );
   
        // Return null by default
        } else {
          return null;
        } 
      });
    return (
        <div className="pt-30 ">
            <img className='z-10 absolute inset-x-0 top-0  w-full h-30vh object-cover' src={post.slider && post.slider.url} />
             <div className="z-100  w-full flex justify-center text-6xl font-bold h-50vh pt-46">
                {RichText.render(post.title, linkResolver)}
             </div>
             <div className="flex">
             <div className="w-2/3">
             {blogContent}
             </div>
             <div className="w-1/3"></div>
             </div>
        </div>
    );
};



export default HomePage;

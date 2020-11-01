// In src/pages/Page.js
import React, { useEffect, useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { client, linkResolver } from '../../prismic-configuration'
import NotFound from '../NotFound'
import { useDispatch, useSelector } from 'react-redux'
import {Link as RouteLink} from 'react-router-dom'
import { fetchMiniPosts, fetchPosts } from '../../redux/post/action'

const DetailPage = ({ match }) => {
        const [Loading, setLoading] = useState(true);
        const [PageData, setPageData] = useState(null);
        const [Post, setPost] = useState(null);

   
        const dispatch = useDispatch()
        const posts = useSelector(state => state.post.posts)
        const miniPosts = useSelector(state => state.post.miniPosts)
        useEffect(()=>{
            dispatch(fetchPosts())
            dispatch(fetchMiniPosts())
            
        },[])
        const fetchData = ()=>{
              client.getSingle('postdetailpage').then((res)=>{
              setPageData(res.data)
              setLoading(false)
              console.log(res)
              }).catch(error=>{
                console.log(error)
              })
          }

          useEffect(()=>{
            fetchData();

            },[])
            const bannerComponent = PageData && PageData.body.map((slice, index)=>{
                if(slice.slice_type == 'banner_with_caption'){
                    return (
                        <a href={slice.primary.button_link.url} target="_blank" className="w-full flex flex-col items-center justify-center overflow-hidden shadow-md bg-white transition duration-100 transform hover:scale-105">
                                <img className="w-full h-2/3" src={slice.primary.image_banner.url} alt=""/>
                                <div className="py-4">
                                <h1 className="text-sm text-gray-800 text-center">{RichText.asText(slice.primary.title_of_banner,linkResolver)}</h1>
                                <p className="text-sm font-thin text-gray-600 text-center">{RichText.asText(slice.primary.description,linkResolver)}</p>
                                {/* <a href={slice.primary.button_link.url} target="_blank" className=""><p className="p-1 px-4 mt-4 text-gray-600  border border-gray-600 border-solid rounded-lg text-sm">{RichText.asText(slice.primary.button_label,linkResolver)}</p></a> */}
                                </div>
                        </a>
                    )
                }
            })
        

        const uid = match.params.uid
        const fetchPostData = ()=>{
            client.getByUID('post', uid).then((res)=>{
          
            setPost(res.data)
            console.log(res)
            }).catch(error=>{
              console.log(error)
            })
        }
        useEffect(()=>{
            
            fetchPostData();
            
        },[uid])

        const postContent = Post && (
            <div className="border border-solid border-gray-300 p-4 bg-white">
                <div className="py-4 text-4xl font-bold leading-9 border border-t-0 border-r-0 border-l-0 border-solid border-gray-600">
                    {Post && RichText.asText(Post.title,linkResolver)}
                            {Post && (
                            <p className="text-xs text-red-800 py-2">
                            <span className="">Author: {Post.author} </span> | <span className="font-light">{`${new Date(Post.datetime).toDateString()} ${new Date(Post.datetime).toLocaleTimeString()}`}</span>
                        </p>
                        )}
                </div>
                <div className="font-medium text-gray-700 text-lg leading-loose ">
                    <img className="w-full overflow-hidden mb-4" src={Post.thumbnail.url} alt=""/>
                    {RichText.render(Post.content,linkResolver)}
                </div>
            </div>
            
        )
        const relatedPost = miniPosts && miniPosts.map((post,index)=>(
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
                            <RouteLink   to="/login" target="_blank"><div className=" hover:bg-red-600 hover:text-white py-1 px-4 mx-1 border border-solid ">SAVE</div></RouteLink>
                              {/* {RichText.render(item.content)} */}
                          </div>
                        </div>
                    </div>
          ));
        //   const smBlogContent = posts && posts.map((post,index)=>(
        //     <div key={index+10} className="flex flex-wrap p-4 relative border border-t-0 border-l-0 border-r-0">
        //                 <div className="flex-1 sm:px-4 pb-10">
        //                   <div className="text-gray-900 text-lg font-bold leading-none">
        //                       {RichText.asText(post.title)}
        //                   </div>
        //                   <p className="text-xs text-red-800 py-2">
        //                       <span className="">Author:{post.author} </span> | <span className="font-light">{`${new Date(post.datetime).toDateString()} ${new Date(post.datetime).toLocaleTimeString()}`}</span>
        //                   </p>
        //                   {/* <div className="text-sm text-gary-600 font-light pt-4">
        //                       {RichText.render(item.subtitle)}
        //                   </div> */}
    
        //                   <div className="absolute bottom-4 right-4 text-xs font-bold text-gray-900 flex-1 flex items-end justify-end">
        //                     <RouteLink   to={`/detail/${post.id}`}><div className=" hover:bg-red-600 hover:text-white py-1 px-4 mx-1 border border-solid ">READ</div></RouteLink>
        //                     <RouteLink   to="/login" target="_blank"><div className=" hover:bg-red-600 hover:text-white py-1 px-4 mx-1 border border-solid ">SAVE</div></RouteLink>
        //                       {/* {RichText.render(item.content)} */}
        //                   </div>
        //                 </div>
        //             </div>
        //   ));

  const pageStyle = {
      textAlign:'center',
      fontSize:'30px',
      fontStyle:'bold',
      padding:'30px'
    };
   const container = {
       display:'flex',
       justifyContent:'center',
       alignItems:'center'
   }

  

  if (PageData) {
    return (
        <div className="py-20 sm:py-30 flex flex-wrap bg-white ">
            <div className="w-full flex justify-center items-center p-2 sm:p-0 py-4 sm:py-10 ">
            {PageData.thumbnail && (<img className='w-full sm:w-3/5 object-contain border-0  border-solid border-red-600' src={PageData.thumbnail.url} />)}
            </div>
            <div className="w-full md:w-4/5 px-4 flex flex-wrap-reverse">
                <div className="w-full md:w-1/4 border sm:border-r-0">
                    <h1 className="text-xl font-bold text-center py-8 sm:py-4 text-red-600 border border-t-0 border-l-0 border-r-0">HOT TOPIC</h1>
                    {relatedPost}
                </div>
                <div className="w-full md:w-3/4">
                    {postContent}
                </div>
            </div>
            <div className="w-full px-4 md:w-1/5 flex flex-col items-center justify-start space-y-4">
            {bannerComponent}
            </div>
            
        </div>
    )
  } else if (!Loading) {
    return <NotFound />
  }
  return null
}

export default DetailPage
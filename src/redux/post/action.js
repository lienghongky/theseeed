import * as actionConst from './actionConst'
import { client } from '../../prismic-configuration'
export const AddPost = post => {
    return {
        type : actionConst.POST_ADD,
        payload:post
    }
}

export const fetchPostRequest = () => {
    return {
      type: actionConst.FETCH_POST_REQUEST
    }
  }
  
export const fetchPostSuccess = list => {
    return {
      type: actionConst.FETCH_POST_SUCCESS,
      payload: list
    }
  }
  
export const fetchPostFailure = error => {
    return {
      type: actionConst.FETCH_POST_FAILURE,
      payload: error
    }
  }

export const fetchPosts = ()=>{
  return dispatch => {
    dispatch(fetchPostRequest)
    client.getSingle('homepage').then((res)=>{
      console.log(res.data)
      dispatch(fetchPostSuccess(res.data))
    }).catch(error=>{
      console.log(error)
      dispatch(fetchPostFailure(error))
    })
  }
}


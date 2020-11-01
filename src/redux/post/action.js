import * as actionConst from './actionConst'
import { client } from '../../prismic-configuration'
import Prismic from 'prismic-javascript'

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

export const fetchPosts = (tage = '')=>{
  return dispatch => {
    dispatch(fetchPostRequest)
    var queries = [
      Prismic.Predicates.at('document.type', 'post')
    ]
    if(tage !== undefined && tage !== null && tage !== '' && tage.toLowerCase() !== 'all') queries.push( Prismic.Predicates.at('my.post.tage', tage.toLowerCase().capitalize()))
    client.query(
      queries
      ,
      {orderings : '[my.post.datetime desc]' }
    ).then((res)=>{
      console.log(res)
      console.log('Load post')
      dispatch(fetchPostSuccess(res.results.map(e=>{
        return {
          ...e.data,
          id:e.uid
          }
      })))
    }).catch(error=>{
      console.log(error)
      dispatch(fetchPostFailure(error))
    })
  }
}

export const fetchTageRequest = () => {
  return {
    type: actionConst.FETCH_TAGE_REQUEST
  }
}

export const fetchTageSuccess = list => {
  return {
    type: actionConst.FETCH_TAGE_SUCCESS,
    payload: list
  }
}

export const fetchTageFailure = error => {
  return {
    type: actionConst.FETCH_TAGE_FAILURE,
    payload: error
  }
}

export const fetchTages = ()=>{
return dispatch => {
  dispatch(fetchTageRequest)
  var queries = [
    Prismic.Predicates.at('document.type', 'tage')
  ]
  client.query(
    queries
    ,
    {orderings : '[my.tage.id]' }
  ).then((res)=>{
    console.log(res)
    console.log('Load tage')
    dispatch(fetchTageSuccess(res.results.map(e=>e.data)))
  }).catch(error=>{
    console.log(error)
    dispatch(fetchTageFailure(error))
  })
}
}


export const fetchMiniPostRequest = () => {
  return {
    type: actionConst.FETCH_MINI_POST_REQUEST
  }
}

export const fetchMiniPostSuccess = list => {
  return {
    type: actionConst.FETCH_MINI_POST_SUCCESS,
    payload: list
  }
}

export const fetchMiniPostFailure = error => {
  return {
    type: actionConst.FETCH_MINI_POST_FAILURE,
    payload: error
  }
}


export const fetchMiniPosts = (tage = '')=>{
  return dispatch => {
    dispatch(fetchMiniPostRequest)
    var queries = [
      Prismic.Predicates.at('document.type', 'minipo')
    ]
    // if(tage !== undefined && tage !== null && tage !== '' && tage.toLowerCase() !== 'all') queries.push( Prismic.Predicates.at('my.post.tage', tage.toLowerCase().capitalize()))
    client.query(
      queries
      ,
      {orderings : '[my.minipo.datetime desc]' }
    ).then((res)=>{
      console.log(res)
      console.log('Load MINI POST')
      dispatch(fetchMiniPostSuccess(res.results.map(e=>{
        return {
          ...e.data,
          id:e.uid
          }
      })))
    }).catch(error=>{
      console.log(error)
      dispatch(fetchMiniPostFailure(error))
    })
  }
}
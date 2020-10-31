import * as actionConst from './actionConst'
import { client } from '../../prismic-configuration'
export const AddPage = Page => {
    return {
        type : actionConst.PAGE_ADD,
        payload:Page
    }
}

export const fetchPageRequest = () => {
    return {
      type: actionConst.FETCH_PAGE_REQUEST
    }
  }
  
export const fetchPageSuccess = list => {
    return {
      type: actionConst.FETCH_PAGE_SUCCESS,
      payload: list
    }
  }
  
export const fetchPageFailure = error => {
    return {
      type: actionConst.FETCH_PAGE_FAILURE,
      payload: error
    }
  }

export const fetchPages = ()=>{
  return dispatch => {
    dispatch(fetchPageRequest)
    client.getSingle('homepage').then((res)=>{
      console.log(res.data)
      dispatch(fetchPageSuccess(res.data))
    }).catch(error=>{
      console.log(error)
      dispatch(fetchPageFailure(error))
    })
  }
}


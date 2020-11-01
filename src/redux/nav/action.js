import Prismic from 'prismic-javascript'
import * as actionConst from './actionConst'
import {client, linkResolver } from '../../prismic-configuration'

export const selectLink = link => {
    return {
        type : actionConst.NAV_SELECT,
        payload:link
    }
}

export const selectLinkByPath = path => {
  return {
      type : actionConst.NAV_SELECT_BY_PATHG,
      payload:path
  }
}


export const fetchLogoRequest = () => {
    return {
      type: actionConst.FETCH_LOGO_REQUEST
    }
  }
  
export const fetchLogoSuccess = list => {
    return {
      type: actionConst.FETCH_LOGO_SUCCESS,
      payload: list
    }
  }
  
export const fetchLogoFailure = error => {
    return {
      type: actionConst.FETCH_LOGO_FAILURE,
      payload: error
    }
  }

export const fetchLogo = ()=>{
  return dispatch => {
    dispatch(fetchLogoRequest)
    client.getSingle('sitelogo').then((res)=>{
      dispatch(fetchLogoSuccess(res.data))
    }).catch(error=>{
      console.log(error)
      dispatch(fetchLogoFailure(error))
    })
  }
}


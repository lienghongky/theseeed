import * as actionConst from './actionConst'
const initialState = {
    loading: false,
    pages: [],
    error: ''
  }
const PageReducer = (state = initialState,action)=>{
    switch(action.type){
        case actionConst.FETCH_PAGE_REQUEST:
            return {...state,loading:true,error:''}
        case actionConst.FETCH_PAGE_FAILURE:
            return {...state,loading:false,error:action.payload}
        case actionConst.FETCH_PAGE_SUCCESS:
            return {...state,loading:false,error:'',pages:action.payload}
        case actionConst.PAGE_ADD:
            return {...state}
        case actionConst.PAGE_UPDATE:
            return {...state}
        case actionConst.PAGE_REMOVE:
                return {...state}
        default:
            return state;
    }
}

export default PageReducer
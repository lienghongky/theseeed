import * as actionConst from './actionConst'
const initialState = {
    loading: false,
    posts: [],
    error: ''
  }
const PostReducer = (state = initialState,action)=>{
    switch(action.type){
        case actionConst.FETCH_POST_REQUEST:
            return {...state,loading:true,error:''}
        case actionConst.FETCH_POST_FAILURE:
            return {...state,loading:false,error:action.payload}
        case actionConst.FETCH_POST_SUCCESS:
            return {...state,loading:false,error:'',posts:action.payload}
        case actionConst.POST_ADD:
            return {...state}
        case actionConst.POST_UPDATE:
            return {...state}
        case actionConst.POST_REMOVE:
                return {...state}
        default:
            return state;
    }
}

export default PostReducer
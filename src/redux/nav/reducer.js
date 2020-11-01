import * as actionConst from './actionConst'
const initialState = {
    loading: false,
    logo:{
        icon:{
            url:'https://cdn3.iconfinder.com/data/icons/fresh-fruits-3/48/fruit-11-2-512.png'
        },
        text:'THE SEED'
    },
    links: [
        {
            path:'/home',
            title:'Home',
            icon:'menu'
        },
        {
            path:'/contact',
            title:'Contact',
            icon:'menu'
        },
        {
            path:'/about',
            title:'About',
            icon:'menu'
        },
        {
            path:'/help',
            title:'Help',
            icon:'menu'
        }
    ],
    selectedLink:null,
    error: ''
  }
 const NavReducer = (state = initialState,action)=>{
    switch(action.type){
        case actionConst.NAV_SELECT:
            return {...state,selectedLink:action.payload}
        case actionConst.NAV_SELECT_BY_PATHG:
            return {...state,selectedLink:state.links.find(e=>e.path === action.payload)}
        case actionConst.FETCH_LOGO_REQUEST:
            return {...state,loading:true,error:''}
        case actionConst.FETCH_LOGO_FAILURE:
            return {...state,loading:false,error:action.payload}
        case actionConst.FETCH_LOGO_SUCCESS:
            return {...state,loading:false,error:'',logo:action.payload}
        default:
            return {...state};
    }
}

export default NavReducer;

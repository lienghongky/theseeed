import * as actionConst from './actionConst'
const initialState = {
    loading: false,
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
        default:
            return {...state};
    }
}

export default NavReducer;

import * as actionConst from './actionConst'
const initialState = {
    loading: false,
    links: [
        {
            path:'/page/home',
            title:'Home',
            icon:'menu'
        },
        {
            path:'/today',
            title:'Today',
            icon:'menu'
        },
        {
            path:'/weekly',
            title:'Weekly',
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

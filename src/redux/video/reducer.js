

const reducer = (state={videos:[],id:0},action)=>{
    switch(action.type){
        case "update":
            return {...state,videos:[state.videos.map(e=>{
                if(e.id == action.payload.id){
                    return action.payload
                }
                return e
            })]}
        case "create":
            state.id++;
            return {...state,videos:[...state.videos,{id:state.id+1,name:action.payload.name}]}
        case "delete":
            return {...state,videos:[...state.videos.filter(v=>v.id != action.payload.id)]}

        default: return state
    }

   
}

export default reducer;
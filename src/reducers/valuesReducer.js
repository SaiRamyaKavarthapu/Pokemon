import ACTION_TYPES from "../actions/actionTypes";


let initialState ={
    result:[]
}

const valuesReducer = (state=initialState, {type,payload})=>{

    switch(type){
        case ACTION_TYPES.FETCH_SUCCESS:
            return{
               ...state,
               result:payload
            }
            default:
                return state
           
    }

}
export default valuesReducer;
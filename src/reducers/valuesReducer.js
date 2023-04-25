import ACTION_TYPES from "../actions/actionTypes";


let initialState ={
    count:0
}

const valuesReducer = (state=initialState, {type,payload})=>{

    switch(type){
        case ACTION_TYPES.INTIAL_STATE:
            return{
                ...state,
              count:payload
            }
        case ACTION_TYPES.INCREMENT_COUNT:
            return{
               ...state,
            count:state.count+20
            }
            case ACTION_TYPES.DECREMENT_COUNT:
                return{
                   ...state,
                   count:state.count-1
                }
            default:
                return state
           
    }

}
export default valuesReducer;
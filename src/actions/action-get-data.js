import ACTION_TYPES from "./actionTypes";


export const getValue = (value)=>{
    return{
       type:ACTION_TYPES.INTIAL_STATE,
       payload:value 
    }

}

export const getData =(value)=>{
    if(value === '+'){
    return{
        
        type:ACTION_TYPES.INCREMENT_COUNT,

    }
}
else
 return{
    type:ACTION_TYPES.DECREMENT_COUNT,
 }

}
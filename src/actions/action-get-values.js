import axios from 'axios';
import ACTION_TYPES from './actionTypes';

const getValues = (name) => async(dispatch)=>{
   await axios 

   .get("https://pokeapi.co/api/v2/pokemon/"+name).then(
    res => dispatch(getData(res.data))
   )
}

const getData = (result) =>{
    return {
      type:ACTION_TYPES.FETCH_SUCCESS,
      payload:result.abilities
    }
}
export default getValues;
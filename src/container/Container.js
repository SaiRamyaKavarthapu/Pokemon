import PokemonList from "../component/PokemonList";
import {connect} from 'react-redux';
import { getData,getValue } from "../actions/action-get-data";

export const mapStateToProps = (state) =>{

    return {
        count:state.event.count
    }

}

export const mapDispatchProps=(dispatch)=>({

getData: value=>dispatch(getData(value)),
getValue:value=>dispatch(getValue(value))



})

export default connect(mapStateToProps,mapDispatchProps)(PokemonList)
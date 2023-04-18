import PokemonList from "../component/PokemonList";
import {connect} from 'react-redux';
import getValues from "../actions/action-get-values";


export const mapStateToProps = (state) =>{

    return {
        result:state.event.result
    }

}

export const mapDispatchProps=(dispatch)=>({

getValues : (name)=> dispatch(getValues(name))

})

export default connect(mapStateToProps,mapDispatchProps)(PokemonList)
import React, { Component} from 'react';
import Data from '../mock/MockData';

class PokemonList extends Component{


  componentDidMount(){
    this.setAbility(this.props.Content.drop1[0].ability.name);
  }
   setAbility = (event)=>{


   }

    handleDropdown(e){
        e.preventDefault();
        this.setAbility(e.target.value);
    }
    render(){
        const dropDownList = this.props.Content.drop1;
        return(
            <div className='component'>
                <h1>{this.props.Content.heading}</h1><br/>
                <div className='dropdown'>
                    <label>Select Name: </label><br/>
                    <select onChange={(e) => this.handleDropdown}></select>
                </div>

            </div>
        
    )
 }

}
PokemonList.defaultProps = {
    Content:Data
}
export default PokemonList;
import React from 'react';


class PokemonList extends React.Component{

    componentDidMount(){
        this.setAbility(this.props.Content.drop1[0].ability.name)
    }


     setAbility = (name)=> {
        this.props.getValues(name);

    }

    dropdownChange(e){
        e.preventDefault();
        this.setAbility(e.target.value);

    }

    render(){
       const dropDownlist = this.props.Content.drop1;
       const result= this.props.result;
        return(<div>

            <div><h1>{this.props.Content.heading}</h1></div>
            <div>
           <select onChange={(e)=>this.dropdownChange(e)}> 

           {dropDownlist.map((item)=> {
            return <option>{item.ability.name}</option>
           })}

           </select>
           <div>
            <select>
           {result.map((item)=> {
            return <option>{item.ability.name}</option>
           })}
           </select>
           </div>
            </div>

        </div>)
    }

}
export default PokemonList;
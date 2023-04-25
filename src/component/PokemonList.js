import React from 'react';


class PokemonList extends React.Component{

     handleChange(e){

        this.props.getValue(Number(e.target.value))
    
    }
    handleClick(a){
        
        this.props.getData(a)
    }

    render(){
       
        return(<div>
            {this.props.count}
        <input  onChange={(e)=>this.handleChange(e)}/>    
       <button onClick={()=>this.handleClick("+")}>+</button><br/>
       <button onClick={()=>this.handleClick("-")}>-</button>
           

        </div>)
    }

}
export default PokemonList;
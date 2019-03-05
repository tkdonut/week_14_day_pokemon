import React from 'react';
import PokemonDetail from '../components/PokemonDetail'

class PokemonContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentPokemon: null
        };
    }

    render(){
        return (
        <div>
            <h1>Pokemon Getter Dodadder</h1>
            {/* <PokemonForm/> */}
            <PokemonDetail/>
        </div>
        )
    }
}

export default PokemonContainer;
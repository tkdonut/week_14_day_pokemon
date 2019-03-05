import React from 'react';
import PokemonForm from '../components/PokemonForm'
import PokemonDetail from '../components/PokemonDetail'

class PokemonContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentPokemon: null
        };
        this.handleSearchedPokemon = this.handleSearchedPokemon.bind(this);
    }

    handleSearchedPokemon(pokemon) {
        this.setState({currentPokemon: pokemon})
    } 


    render(){
        return (
        <div>
            <h1>Pokemon Getter Dodadder</h1>
            <PokemonForm onPokemonSearched={this.handleSearchedPokemon}/>
            <PokemonDetail pokemon={this.state.currentPokemon}/>
        </div>
        )
    }
}

export default PokemonContainer;
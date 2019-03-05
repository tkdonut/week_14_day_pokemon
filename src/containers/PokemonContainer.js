import React from 'react';
import PokemonForm from '../components/PokemonForm'
import PokemonDetail from '../components/PokemonDetail'

class PokemonContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentPokemon: null,
            foundPokemon: null
        };
        this.handleSearchedPokemon = this.handleSearchedPokemon.bind(this);
        this.handleNoPokemon = this.handleNoPokemon.bind(this);
    }

    handleSearchedPokemon(pokemon) {
        this.setState({currentPokemon: pokemon})
    } 

    handleNoPokemon(found){
        this.setState({foundPokemon: found});
    }

    render(){
        return (
        <div className='flexContainer'>
            <h1>Pokemon Getter Dodadder</h1>
            <PokemonForm onPokemonSearched={this.handleSearchedPokemon} pokemonFound={this.handleNoPokemon}/>
            <PokemonDetail pokemon={this.state.currentPokemon} pokemonFound={this.state.foundPokemon}/>
        </div>
        )
    }
}

export default PokemonContainer;

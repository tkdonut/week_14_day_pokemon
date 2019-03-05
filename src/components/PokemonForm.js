import React, {Component} from 'react';

class PokemonForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            pokeName: ''
        }
        this.handlePokemonChange = this.handlePokemonChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handlePokemonChange(e){
        this.setState({pokeName: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
	if (!this.state.pokename) return;
        const url = 'https://pokeapi.co/api/v2/pokemon/' + this.state.pokeName
        
        fetch(url)
        .then(res => res.json())
        .then(data => this.props.onPokemonSearched(data))

        this.setState({pokeName: ''})
    }

    render(){
        return (
            <form className="pokemon-form" onSubmit={this.handleSubmit}>
            <input 
                type='text' 
                placeholder='Search for Pokemon!'
                value={this.state.pokeName}
                onChange={this.handlePokemonChange}
            />
            <input
                type='submit'
                value='Pokesearch!'
            />
            </form>
        )
    }
}

export default PokemonForm;

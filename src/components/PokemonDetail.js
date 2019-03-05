import React from 'react';

const PokemonDetail = ({pokemon, pokemonFound}) => {
    if(pokemonFound === false){
        return(
        <h1> Sorry! No pokemon by that name. </h1> 
        )
    }
    if(!pokemon) return null;
    return(
    
    <div>

        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt='pokemon'/>
    

    </div>

    );
}

export default PokemonDetail;

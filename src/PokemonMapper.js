import React, { Component } from 'react';
import MyPokemonArticle from './MyPokemonArticle.js';

// This is a presentational component 
// A Component that takes in the props and displays them 

export default class PokemonMapper extends Component {
    
    render() {
        return (
            <div className="pokemonMap">
            {
                 
                    this.props.pokemonData.length === 0
                    ? <div className="loader"><iframe src="https://giphy.com/embed/LxSFsOTa3ytEY" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen title="sjidasjd"></iframe></div>
                        
                        
                    :this.props.pokemonData.map((pokemon) => 
                        <MyPokemonArticle
                        pokemonName={pokemon.pokemon}
                        pokemonType={pokemon.type_1}
                        attack={pokemon.attack}
                        defense={pokemon.defense}
                        hp={pokemon.hp}
                        image={pokemon.url_image}
                        alt={pokemon.shape}
                        />
                        
                    )       
            }
            </div>
        )
    }
}


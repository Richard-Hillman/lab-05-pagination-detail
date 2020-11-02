import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// This is my basic singular pokemon article output 

export default class MyPokemonArticle extends Component {
    render() {
        return (
            <div className="pokemonArticle">
                <Link to={`Details/${this.props.pokemonName}`}>
                <img className='PokemonImg' src={this.props.image} alt={this.props.alt} />
                <div>Pokemon Name:{this.props.pokemonName}</div>
                <div>Attack:{this.props.attack}</div>
                <div>Defense:{this.props.attack}</div>
                <div>HP:{this.props.hp}</div>            
                </Link>
            </div>
        )
    }
}

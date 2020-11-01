import React, { Component } from 'react';
import Footer from './MyFooter.js';


export default class Home extends Component {
    render() {
        return (
            <div>
               
                <h1> Welcome to the Pokedex </h1> 

                <section>

                   <div> 
                   The Pokédex (ポケモン図鑑 Pokemon Zukan) is an electronic device designed to catalogue and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and manga series. The name Pokédex is a neologism including "Pokémon" (which itself is a portmanteau of "pocket" and "monster") and "index". The Japanese name is simply "Pokémon Encyclopedia", and it can feature every Pokémon on it, depending on the Pokédex.
                   </div>
                   
                </section>

                <Footer />

            </div>
        )
    }
}

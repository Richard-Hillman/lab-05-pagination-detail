import React from 'react';
import Footer from './MyFooter.js';
import fetch from 'superagent';
import PokemonMapper from './PokemonMapper';


export default class Details extends React.Component {

    state = { 
      pokemonData:[],
    }

// ======================================================================================================


      componentDidMount = async () => {
          console.log(this.props);
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemon}`);
        this.setState({ pokemonData: response.body.results });
      }

// ===============================================================================================

    render() {
     
      return (
        <div className="articleOne">
        {/* ============================================================= */}

        {/* ================================================================ */}

              {/* Here is where I take the state of my pokemon Data and connect it to the pokemon mapper that will display all of my pokemon */}
              <div className="poker">
                <h1>{this.props.match.params.pokemon}</h1>  
                <PokemonMapper 
                  pokemonData={this.state.pokemonData} 
                />
              </div>

                {/* ============================================================= */}

              <Footer className="stupidFeet" />

            </div>
        )
    }
  }

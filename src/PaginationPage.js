import React from 'react';
import Header from './MyHeader.js';
import Footer from './MyFooter.js';
import fetch from 'superagent';
import PokemonMapper from './PokemonMapper';


export default class App extends React.Component {


    state = { 
      filter:'',
      form:'',
      pokemonData:[],
      sortType:'attack',
      UporDown:'asc',
      pageNumber: 1,
      count: 1
    }

    // Pokemon Grabbers ======================================================================================================
    // This is where I am getting my information from and mounting it from the api.   
      fetchPokemon = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.pageNumber}&perPage=20`)
        this.setState({ pokemonData: response.body.results });

        this.setState({
            pokemonData: response.body.results,
            count: response.body.count
        })
      } 
    
    
      componentDidMount = async () => {
        this.fetchPokemon();
      }
      
    
        // ===================================================================================================================

    // THis handles the SortType
      handleChangeSortType = async (e) => {
        await this.setState({
          sortType: e.target.value,
        })
        await this.fetchPokemon();
      } 
  
      // This handles my asc or desc 
      handleChangeAscOrDesc = async (e) => {
        await this.setState({
          UporDown: e.target.value
        })
        await this.fetchPokemon();
      }
  
// =================================================

      // handles the Submitting of my form, Sets the state and then calls for the api to get that state that has been defined by user in the form specifically. 
      handleSubmit = async (e) => {
        e.preventDefault();
        await this.setState({
          form: this.state.filter
        })
        await this.fetchPokemon();
      }

      // Slightly confused here but as the user changes the text in the search bar it is working with the form to set the state for submit. This also calls the fetchpokemon which calls the api. (Do I need the api to be called or can I have the submit handle do that and the change just be set into state?)
      handleChange = async (e) => {
        await this.setState({
          filter: e.target.value
        })
        await this.fetchPokemon();
      }


      handleIncrement = async () => {
          await this.setState({
              pageNumber: this.state.pageNumber + 1
          })       
          await this.fetchPokemon()
      }

      handleDecrement = async () => {
        await this.setState({
            pageNumber: this.state.pageNumber - 1
        })
        await this.fetchPokemon()
      }


// ===============================================================================================

    render() {
      
      return (
        <div className="articleOne">
        {/* ============================================================= */}
              <section className="Main">

                <Header 
                //  Because I have My dropdown for handling sortType in my header, I need to send this through the header to the dropdown.
                handleChangeSortType={this.handleChangeSortType}
                // Because I have My dropdown for handling asc or desc in my header, I need to send this through the header to the dropdown. 
                handleChangeAscOrDesc={this.handleChangeAscOrDesc}
                // Because I have my search in header I need to send it through header to reach my search
                handleSubmit={this.handleSubmit}
                 // Because I have my search in header I need to send it through header to reach my search
                handleChange={this.handleChange} 
                />
                <div>{this.state.pageNumber}</div>

                <div>{this.state.count}</div>

                <div className="buttons">

                {
                    this.state.pageNumber !== 1 && 
                    <button onClick={this.handleDecrement}>Previous</button>
                } 
                
                {
                     this.state.pageNumber !== Math.ceil(this.state.count / 20) &&
                    <button onClick={this.handleIncrement}>Next</button>
                }

                </div>

              </section>
        {/* ================================================================ */}

              {/* Here is where I take the state of my pokemon Data and connect it to the pokemon mapper that will display all of my pokemon */}
              <div className="poker">
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

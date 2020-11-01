import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div className="nav">
                
                <div>
                    <Link to="/">HOME</Link>
                </div>

                <div>
                    <Link to ="/Pokedex">POKEDEX</Link>
                </div>

                <div>
                    <Link to ="/Credits">CREDITS</Link>
                </div>

                <div>
                    <Link to ="/Details">Details</Link>
                </div>

            </div>
        )
    }
}

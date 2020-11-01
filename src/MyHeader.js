import React, { Component } from 'react';
import DropDown from './DropDown.js';
import SearchRender from './SearchRender.js'
export default class MyHeader extends Component {
    render() {
        return (
            <div className="header">

                <h1>Confessions 2020: I Used to steal Pokemon Cards, I'm sorry</h1>   
              
                <div className="div-soup">
                    <div>
                        My Header Lives in my Head. 
                    </div>
                </div>

                <div className="drop-down">
                    <div>
                        <DropDown 
                        handleChangeSortType={this.props.handleChangeSortType}
                        
                        handleChangeAscOrDesc={this.props.handleChangeAscOrDesc}
                        />
                    </div>
                </div>

                <div className="search">
                    <div>
                        <SearchRender
                            handleSubmit={this.props.handleSubmit}

                            handleChange={this.props.handleChange}
                        />
                    </div>
                </div>

            </div>



        )
    }
}

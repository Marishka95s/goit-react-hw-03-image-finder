import React, { Component } from 'react';

class Searchbar extends Component {
    state = {
        query: ''
    };

    handleChange = (event) => {
        this.setState({query: event.currentTarget.value})
        this.props.onChangeQuery(this.state.query)        
    }

    handleSubmit = e => {
        e.preventDefault();        
    }

    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button" onClick={this.props.onFetchImages}>
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input className="SearchForm-input" type="text" autoComplete="off" autoFocus placeholder="Search images and photos" onChange={this.handleChange}/>
                </form>
            </header>
        )
    }
}

export default Searchbar;
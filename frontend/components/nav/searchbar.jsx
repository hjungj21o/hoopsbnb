import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            keyword: ""
        }

        this.searchUpdate = this.searchUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();

        this.props.fetchKeyword(this.state.keyword);
    }

    searchUpdate(e) {
        e.preventDefault();

        this.setState( {keyword: e.currentTarget.value} );
    }

    render() {
        return (
            <div className="nav-search-bar-container">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        className="nav-search-bar" 
                        type="text"
                        placeholder="Try 'New York'"
                        value={this.state.keyword}
                        onChange={this.searchUpdate}
                    />
                    <button className="search-bar-button">
                            <i className="fas fa-search-location" />
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBar;
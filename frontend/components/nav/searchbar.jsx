import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {

    render() {
        return (
            <div className="nav-search-bar-container">
                <input 
                    className="nav-search-bar" 
                    type="text"
                    placeholder="Try 'New York'"
                />
                <button className="search-bar-button">
                    <Link to="/arenas">
                        <i className="fas fa-search-location" />
                    </Link>
                </button>
            </div>
        );
    }
}

export default SearchBar;
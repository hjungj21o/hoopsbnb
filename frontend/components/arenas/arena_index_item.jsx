import React from 'react';
import { Link } from 'react-router-dom';

const ArenaIndexItem = ( { arena } ) => {
    return (
        <li className="arena-index-item">
            <Link to={`/arenas/${arena.id}`}>
                <div className="arenas-search-list">
                    <img src={window.arena} alt="arena" />
                </div>
                <div className="placeholder">
                <div className="arenas-index-title-list key-list">
                    <ul>
                        <li>Full Court</li>
                        <li><i className="fas fa-star"/> 4.85</li>
                    </ul>
                </div>
                <div className="arenas-index-arena-name">{arena.name}</div>
                <div className="arenas-index-key-list key-list">
                    <ul>
                        <li>20 hoopers</li>
                        <li>Day or Night</li>
                        <li>Regulation Size</li>
                    </ul>
                </div>
                <div className="arenas-index-amenities-list key-list">
                    <ul>
                        <li>Free Drinks</li>
                        <li>Ball Rentals</li>
                        <li>Towels</li>
                        <li>First Aid Kits</li>
                    </ul>
                </div>
                <div>${arena.price} / Hour</div>
                </div>
            </Link>
        </li>
    )
}

export default ArenaIndexItem;
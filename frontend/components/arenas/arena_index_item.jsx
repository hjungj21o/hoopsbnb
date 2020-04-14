import React from 'react';
import { Link } from 'react-router-dom';

const ArenaIndexItem = ( { arena } ) => {
    if (Object.keys(arena).length === 0) return <div>fetching data...</div>
    return (
        <li className="arena-index-item">
            <Link to={`/arenas/${arena.id}`} className="arenas-container">
                <div className="arena-index-list-container">
                    <div className="arenas-search-list-img">
                        <img src={arena.photoUrls[0]} alt="arena" />
                    </div>
                    <div className="arenas-index-list">
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
                        <div className="arenas-index-pricing">
                            <div className="dollars">${arena.price}</div> 
                            <div className="per-hour">/ hour</div>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default ArenaIndexItem;
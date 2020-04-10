import React from 'react';
import { Link } from 'react-router-dom';

const ArenaIndexItem = ( { arena } ) => {
    return (
        <li>
            <Link to={`/arenas/${arena.id}`}>
            {arena.city}
            {arena.name} 
            <p>${arena.price} / Hour</p>
            </Link>
        </li>
    )
}

export default ArenaIndexItem;
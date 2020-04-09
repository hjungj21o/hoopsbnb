import React from 'react';

const ArenaIndexItem = ( { arena } ) => {
    return (
        <li>
            {arena.city}
            {arena.name} 
            <p>${arena.price} / Hour</p>
        </li>
    )
}

export default ArenaIndexItem;
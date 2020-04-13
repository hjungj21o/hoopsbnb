import React from 'react';
import ArenaIndex from '../arenas/arena_index';
import ArenasListMap from '../map/arenas_list_map';

const Search = ( { arenas, fetchArenas, updateFilter } ) => {
    return (
        <div className="arenas-map-container">
            <ArenaIndex arenas={arenas} fetchArenas={fetchArenas} />
            <ArenasListMap arenas={arenas} updateFilter={updateFilter} />
        </div>
    )
}

export default Search;
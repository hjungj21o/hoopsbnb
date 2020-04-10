import React from 'react';
import ArenaIndex from '../arenas/arena_index';
import ArenasListMap from '../map/arenas_list_map';

const Search = ( { arenas, fetchArenas } ) => {
    return (
        <div>
            <ArenasListMap  />
            <ArenaIndex arenas={arenas} fetchArenas={fetchArenas} />
        </div>
    )
}

export default Search;
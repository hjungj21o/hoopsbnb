import React from 'react';
import ArenaIndex from '../arenas/arena_index';
import ArenasListMap from '../map/arenas_list_map';
import NonSplashGreetingContainer from '../nav/nonsplash_greeting_container'

const Search = ( { arenas, fetchArenas, updateFilter, keyword, deleteKeyword } ) => {
    return (
        <>
        <header>
            <NonSplashGreetingContainer />
        </header>
        <div className="arenas-map-container">
            <ArenaIndex arenas={arenas} fetchArenas={fetchArenas} />
            <ArenasListMap arenas={arenas} updateFilter={updateFilter} keyword={keyword} deleteKeyword={deleteKeyword} />
        </div>
        </>
    )
}

export default Search;
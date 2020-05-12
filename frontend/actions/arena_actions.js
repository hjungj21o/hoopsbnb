import * as ArenasApiUtil from '../util/arena_api_util';
export const RECEIVE_ARENAS = 'RECEIVE_ARENAS';
export const RECEIVE_ARENA = 'RECEIVE_ARENA;'

const receiveArenas = arenas => ({
    type: RECEIVE_ARENAS,
    arenas
})

const receiveArena = arena => ({
    type: RECEIVE_ARENA,
    arena
})

export const fetchArenas = (data) => dispatch => (
    ArenasApiUtil.fetchArenas(data)
        .then(arenas => dispatch(receiveArenas(arenas)))
);

export const fetchArena = arenaId => dispatch => (
    ArenasApiUtil.fetchArena(arenaId)
        .then(arena => dispatch(receiveArena(arena)))
)

export const fetchArenasOnSearchResults = (keyword, startDate, endDate) => dispatch => (
    ArenasApiUtil.fetchArenasOnSearchResults(keyword, startDate, endDate)
        .then(arenas => dispatch(receiveArenas(arenas)))
)
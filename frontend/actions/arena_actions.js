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

export const fetchArenas = () => dispatch => (
    ArenasApiUtil.fetchArenas()
        .then(arenas => dispatch(receiveArenas(arenas)))
);

export const fetchArena = arenaId => dispatch => (
    ArenasApiUtil.fetchArena(arenaId)
        .then(arena => dispatch(receiveArena(arena)))
)
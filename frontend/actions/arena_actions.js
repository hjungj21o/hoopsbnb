import * as ArenasApiUtil from '../util/arena_api_util';
import { setKeyword } from './keyword_actions';
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

export const arenasSearch = (keyword, startDate, endDate) => dispatch => {
    dispatch(setKeyword(keyword));
    return ArenasApiUtil.arenasSearch(keyword, startDate, endDate)
    .then(arenas => dispatch(receiveArenas(arenas)))
}
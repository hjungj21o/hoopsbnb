export const FETCH_KEYWORD = "FETCH_KEYWORD";
export const DELETE_KEYWORD = "DELETE_KEYWORD";

export const setKeyword = keyword => {
    return {
        type: FETCH_KEYWORD,
        keyword
    }
}

export const deleteKeyword = keyword => {
    return {
        type: DELETE_KEYWORD
    }
}
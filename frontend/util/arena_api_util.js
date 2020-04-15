export const fetchArenas = filters => (
    $.ajax ({
        method: 'GET',
        url: 'api/arenas',
        data: { filters }
    })
);

export const fetchArena = arenaId => (
    $.ajax({
        method: 'GET',
        url: `api/arenas/${arenaId}`,        
    })
);

// export const fetchArena = arenaId => {
//     debugger;
//     return $.ajax({
//         method: 'GET',
//         url: `api/arenas/${arenaId}`   
//     })
// }
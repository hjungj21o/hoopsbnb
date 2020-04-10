export const fetchArenas = () => (
    $.ajax ({
        method: 'GET',
        url: 'api/arenas',
    })
);

export const fetchArena = arenaId => (
    $.ajax({
        method: 'GET',
        url: `api/arenas/${arenaId}`,        
    })
);
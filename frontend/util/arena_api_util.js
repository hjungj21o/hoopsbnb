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

export const arenasSearch = (keyword, startDate, endDate) => {
    debugger;
    return $.ajax({
        method: 'GET',
        url: '/api/arenas',
        data: {
            keyword,
            start_date: startDate,
            end_date: endDate
        }
    })
}
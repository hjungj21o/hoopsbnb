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

export const fetchArenasOnSearchResults = (keyword, startDate, endDate) => (
    $.ajax({
        method: 'GET',
        url: '/api/search',
        data: {
            keyword,
            start_date: startDate,
            end_date: endDate
        }
    })
)

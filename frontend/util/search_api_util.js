export const fetchSearchResults = (search) => {
    return $.ajax({
        method: "GET",
        url: 'api/search_bars/search',
        data: { search }
    })
};
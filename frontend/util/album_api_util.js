export const fetchAlbums = () => {
  return $.ajax({
    method: "GET",
    url: 'api/albums'
  })
};

export const fetchAlbumsUser = id => {
  return $.ajax({
    method: "GET",
    url: `api/users/${id}/albums`
  })
};

export const fetchAlbum = id => {
  return $.ajax({
    method: "GET",
    url: `api/albums/${id}`
  })
};

export const fetchSearchAlbums = (search) => {
  return $.ajax({
    method: "GET",
    url: "api/albums/search",
    data: {search}
  })
};
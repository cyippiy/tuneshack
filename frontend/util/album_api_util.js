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

export const createAlbum = (album,id) => {
  return $.ajax({
    method: "POST",
    url: `api/users/${id}/albums`,
    data: {album},
  })
};

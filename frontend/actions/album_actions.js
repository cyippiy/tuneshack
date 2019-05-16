import * as AlbumAPIUtil from '../util/album_api_util';
import {receiveErrors} from './session_actions';

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";

const receiveAlbums = albums =>{
  return {
    type:RECEIVE_ALBUMS,
    albums
  }
}

const receiveAlbum = album => {
  return{
    type: RECEIVE_ALBUM,
    album
  }
}

export const fetchAlbums = () => dispatch => {
  return AlbumAPIUtil.fetchAlbums().then(albums => dispatch(receiveAlbums(albums)),
  err => dispatch(receiveErrors(err.responseJSON)))
}
export const fetchAlbumsUser = (id) => dispatch => {
  return AlbumAPIUtil.fetchAlbumsUser(id).then(albums => dispatch(receiveAlbums(albums)),
  err => dispatch(receiveErrors(err.responseJSON)))
}

export const fetchAlbum = (id) => dispatch => {
  return AlbumAPIUtil.fetchAlbum(id).then(album => dispatch(receiveAlbum(album)),
  err => dispatch(receiveErrors(err.responseJSON)))
}
export const fetchSearchAlbums = (search) => dispatch => {
  return AlbumAPIUtil.fetchSearchALbums(search).then(albums => dispatch(receiveAlbums(albums))),
  err => dispatch(receiveErrors(err.responseJSON))
}
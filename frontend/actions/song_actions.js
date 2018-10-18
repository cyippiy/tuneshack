import * as SongAPIUtil from '../util/song_api_util';
import {receiveErrors} from './session_actions';

export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS = "RECEIVE_SONGS";

const receiveSongs = songs =>{
  return {
    type:RECEIVE_SONGS,
    songs
  }
}

const receiveSong = song => {
  return{
    type: RECEIVE_SONG,
    song
  }
}

export const fetchSongs = () => dispatch => {
  return SongAPIUtil.fetchSongs().then(songs => dispatch(receiveSongs(songs)),
  err => dispatch(receiveErrors(err.responseJSON)))
}
export const fetchSongsAlbum = (id) => dispatch => {
  return SongAPIUtil.fetchSongsAlbum(id).then(songs => dispatch(receiveSongs(songs)),
  err => dispatch(receiveErrors(err.responseJSON)))
}

export const fetchSong = (id) => dispatch => {
  return SongAPIUtil.fetchSong(id).then(song => dispatch(receiveSong(song)),
  err => dispatch(receiveErrors(err.responseJSON)))
}

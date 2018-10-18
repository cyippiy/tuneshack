import {
  RECEIVE_SONG,
  RECEIVE_SONGS
} from '../actions/song_actions';
import merge from 'lodash/merge';

const songsReducer = (state = {}, action) =>{
  Object.freeze(state);
  let newState = merge({},state);
  switch (action.type) {
    case RECEIVE_SONGS:
      return action.songs;
    case RECEIVE_SONG:
      newState = merge({},state,{[action.song.id]:action.song});
      return newState
    default:
      return state;
  }

}

export default songsReducer;

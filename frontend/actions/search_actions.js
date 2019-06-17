import * as SearchAPIUtil from '../util/search_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

const receiveResults = results => {
    return {
        type: RECEIVE_RESULTS,
        results
    }
}

export const fetchSearchResults = (search) => dispatch =>{
    return SearchAPIUtil.fetchSearchResults(search).then(results => dispatch(receiveResults(results)),
        err => dispatch(receiveErrors(err.responeJSON)))
}

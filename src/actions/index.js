import streams from '../apis/streams';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from './types';


export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};


export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};


const STREAM_URL = '/streams';

/**
 * To create a new stream in JsonServer
 * @param {Object} formValues - Data of new stream
 */
export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post(STREAM_URL, { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push('/');
};


export const fetchStreams = () => async dispatch => {
  const response = await streams.get(STREAM_URL);

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};


export const fetchStream = id => async dispatch => {
  const response = await streams.get(`${STREAM_URL}/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};


export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.put(`${STREAM_URL}/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
};


export const deleteStream = id => async dispatch => {
  await streams.delete(`${STREAM_URL}/${id}`);
  
  dispatch({ type: DELETE_STREAM, payload: id });
};
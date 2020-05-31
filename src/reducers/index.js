import { combineReducers } from 'redux';
/* Specific reducer created by redux-form for us*/
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';


export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});

import { combineReducers } from 'redux';
/* Specific reducer created by redux-form for us*/
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  // The id "form" is special key
  form: formReducer,
});

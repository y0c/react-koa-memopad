import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import auth from './auth';

export default combineReducers({
    auth,
    pender: penderReducer
});
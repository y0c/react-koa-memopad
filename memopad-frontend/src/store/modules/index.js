import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import auth from './auth';
import user from './user';
import post from './post';

export default combineReducers({
    auth,
    user,
    post,
    pender: penderReducer
});
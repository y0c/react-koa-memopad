import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { AuthApi } from 'lib/api';

const LOCAL_LOGIN = 'auth/LOCAL_LOGIN';
const LOCAL_SIGNUP = 'auth/LOCAL_SIGNUP';
const FORM_CHANGE = 'auth/FORM_CHANGE';
const SET_ERROR = 'auth/SET_ERROR';
const INIT = 'auth/INIT';

export const formChange = createAction(FORM_CHANGE);
export const localLogin = createAction(LOCAL_LOGIN, AuthApi.localLogin);
export const localSignup = createAction(LOCAL_SIGNUP, AuthApi.localSignup);
export const setError = createAction(SET_ERROR);
export const init = createAction(INIT);

const initialState = {
    form : {
        email : '',
        password : '',
        username : '',
        passwordConfirm : '' 
    },
    error : '',
    loginResult : {}
};

export default handleActions({
    [INIT]: (state, action) => {
        return {
            ...initialState
        }
    },
    [SET_ERROR]: (state, action) => {
        return {
            ...state,
            error: action.payload.error
        }
    },
    [FORM_CHANGE]:  (state, action ) => {
        return {
            ...state,
            form : {
                ...action.payload
            }
        }
    },
    ...pender({
        type : LOCAL_LOGIN,
        onSuccess( state, action ){
            const { data: loginResult } = action.payload;
            return {
                ...state,
                loginResult
            };
        },
        onFailure(state, action) {
            return {
                ...state,
                error : action.payload.response.data.message
            }
        }
    }),
    ...pender({
        type : LOCAL_SIGNUP,
        onFailure(state, action) {
            return {
                ...state,
                error : action.payload.response.data.message
            }    
        }
    })
},initialState);
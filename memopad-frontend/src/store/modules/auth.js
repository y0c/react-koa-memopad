import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { AuthApi } from 'lib/api';

const LOCAL_LOGIN = 'auth/LOCAL_LOGIN';
const FORM_CHANGE = 'auth/FORM_CHANGE';

export const formChange = createAction(FORM_CHANGE);
export const localLogin = createAction(LOCAL_LOGIN, AuthApi.localLogin);

const initialState = {
    form : {
        email : '',
        password : ''
    },
    loginResult : {}
};

export default handleActions({
    [FORM_CHANGE]:  (state, action ) => {
        const { email, password } = action.payload;
        return {
            ...state,
            form : {
               email,
               password 
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
        }
    })
},initialState);
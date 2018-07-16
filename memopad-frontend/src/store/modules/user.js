import { createAction, handleActions } from 'redux-actions';
import { UserApi } from 'lib/api'
import { pender } from 'redux-pender';

const GET_MY_INFO = 'user/GET_MY_INFO';

export const getMyInfo = createAction(GET_MY_INFO, UserApi.getMyInfo);

const initialState = {
    info : {
        email : '',
        username : ''
    },
    loginStatus : ''
}

export default handleActions({
    ...pender({
        type: GET_MY_INFO,
        onSuccess(state, action) {
            const { email, username } = action.payload.data;
            return {
                ...state,
                info : {
                    email,
                    username
                },
                loginStatus : 'LOGIN'
            }
        },
        onFailure(state, action) {
            return {
                ...initialState,
                loginStatus : 'NOT_LOGIN'
            };
        }
    })
}, initialState);
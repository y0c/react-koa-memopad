import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { PostApi } from 'lib/api';

const ADD_POST = 'post/ADD_POST';
const FORM_CHANGE = 'post/FORM_CHANGE';
const GET_POSTS = 'post/GET_POST';
const INIT = 'post/INIT';

export const addPost = createAction(ADD_POST, PostApi.addPost);
export const getPosts = createAction(GET_POSTS, PostApi.getPosts);
export const formChange = createAction(FORM_CHANGE);
export const init = createAction(INIT);

const initialState = {
    form: {
        title : '',
        content : '',
        tags : []
    },
    postList: [],
    error : ''
};

export default handleActions({
    [FORM_CHANGE]: (state, action) => {
        return {
            ...state,
            form: {
                ...action.payload
            }
        }
    },
    [INIT]: (state, action) => {
        return {
            ...initialState
        }
    },
    ...pender({
        type : ADD_POST,
        onFailure(state, action){
            return {
                ...state,
                error : action.payload.response.data.message
            }
        } 
    }),
    ...pender({
        type: GET_POSTS,
        onSuccess(state, action) {
            return {
                ...state,
                postList : action.payload.data.list        
            }
        }
    })
}, initialState);
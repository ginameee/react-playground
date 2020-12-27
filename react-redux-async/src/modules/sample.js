import { handleActions } from 'redux-actions';
import createRequestThunk from '../libs/createRequestThunk';
import * as api from '../libs/api';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USER';
const GET_USERS_SUCCESS = 'sample/GET_USER_SUCCESS';

export const getUsers = createRequestThunk(GET_USERS, api.getUsers);
// export const getUsers = () => async dispatch => {
//     dispatch({ type: GET_USERS });

//     try {
//         const response = await api.getUsers();

//         dispatch({
//             type: GET_USERS_SUCCESS,
//             payload: response.data
//         });
//     } catch (e) {
//         dispatch({
//             type: GET_USERS_FAILURE,
//             payload: e,
//             error: true
//         });

//         throw e;
//     }
// };

export const getPost = createRequestThunk(GET_POST, api.getPost);
// export const getPost = id => async dispatch => {
//     dispatch({ type: GET_POST });
//     try {
//         const response = await api.getPost(id);
//         dispatch({ type: GET_POST_SUCCESS, payload: response.data });
//     }
//     catch (e) {
//         dispatch({ type: GET_POST_FAILURE });
//     }
// }

const initialState = {
    post: null,
    users: null
};

const sample = handleActions(
    {
        [GET_POST_SUCCESS]: (state, action) => {
            return {
                ...state,
                post: action.payload
            }
        },
        [GET_USERS_SUCCESS]: (state, action) => {
            return {
                ...state,
                users: action.payload
            }
        },
    },
    initialState
);

export default sample;
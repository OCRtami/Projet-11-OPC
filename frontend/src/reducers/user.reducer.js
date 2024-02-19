import { GET_USERINFO } from "../actions/user.action";

const initialState = {};

export default function userReducer(state=initialState, action){

    switch (action.type) {

        case GET_USERINFO:
            return action.payload;

        default:
            return state;
    }
}
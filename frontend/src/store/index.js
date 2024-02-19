import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/user.reducer";
import { getUserInfo } from "../actions/user.action";

const store = configureStore({
    reducer:{
        userInfo: userReducer
    },
    devTools:true,
});

store.dispatch(getUserInfo());

export default store;
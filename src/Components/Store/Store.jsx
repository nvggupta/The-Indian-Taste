import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "../MenuSlice/MenuSlice"
import UserSlice from "../MenuSlice/user.js"
export const store = configureStore({
    reducer:{
        Menu : MenuSlice,
        User: UserSlice
    },
});



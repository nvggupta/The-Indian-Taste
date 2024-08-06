import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "../MenuSlice/MenuSlice"
export const store = configureStore({
    reducer:{
        Menu : MenuSlice,
    },
});



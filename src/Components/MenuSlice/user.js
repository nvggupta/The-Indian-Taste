import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    updateUser: (state , action)=>{

        return action.payload;
    },
    clearUser : (state, action ) =>{
        
        return {}
        
    }
  }
});

export const { updateUser,clearUser } = userSlice.actions;
export default userSlice.reducer;

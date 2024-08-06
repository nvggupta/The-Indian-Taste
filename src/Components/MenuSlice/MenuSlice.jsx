import { createSlice} from "@reduxjs/toolkit";
import {
  food_list,
  menu_list,
} from "../../Assets/Food Del Frontend Assets/assets/assets";
const initialState = [
  {
    chooseItem: "Select An Item",
    foodItems: [...food_list],
    menu_list: [...menu_list],
  },
];

export const MenuSlice = createSlice({
  name: "Menu",
  initialState,
  reducers: {
    filterItmes: (state,action) => {
     
      if(action.payload === "reset")
      {
        state[0].foodItems = [...food_list]
      }
      else{
        const newFoodList =  food_list.filter((elem) => elem.name.includes(action.payload));
        state[0].foodItems = newFoodList
        state[0].chooseItem = action.payload
      }
    },
  },
});

export const { filterItmes } = MenuSlice.actions;
export default MenuSlice.reducer;

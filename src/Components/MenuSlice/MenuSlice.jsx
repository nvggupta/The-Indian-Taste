import { createSlice,current } from "@reduxjs/toolkit";
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
  {
    totalAmount: 0, 
  },
  [

  ],
  {
    pics: "",
    name: "",
    desc: "",
    isShow: false
  }
];

export const MenuSlice = createSlice({
  name: "Menu",
  initialState,
  reducers: {
    selectItems: (state , action)=>{
      const newFoodList = food_list.filter((elem) =>
        elem.category.includes(action.payload)
      );
      state[0].foodItems = newFoodList;
      state[0].chooseItem = action.payload;
    },
    filterItmes: (state, action) => {
      if (action.payload === "reset") {
        state[0].foodItems = [...food_list];
        state[0].chooseItem =  "Select An Item"
      } else {
        const newFoodList = food_list.filter((elem) =>
          elem.name.toLowerCase().includes(action.payload.toLowerCase())
        );
        state[0].foodItems = newFoodList;
      }
      
    },
    increaseQuantity: (state, action)=>{
        const item = state[0].foodItems.find((elem)=>elem._id===action.payload);
        item.quantity += 1;
        item.totalPrice = item.price*item.quantity
        state[1].totalAmount = state[0].foodItems.reduce((acc, elem)=>acc + elem.totalPrice,0);
        console.log(current(state[2]));
        const isPresent = state[2].find((elem)=>elem._id===action.payload);
        console.log(isPresent);
        (isPresent!==undefined) ? isPresent.quantity++ : state[2].push(item);
      console.log(current(state[2]));
    },
    decreaseQuantity: (state , action)=>{
      const item = state[0].foodItems.find((elem) => elem._id === action.payload);
      if (item.quantity > 0) {
        item.quantity -= 1;
        item.totalPrice = item.price * item.quantity;
      }
      state[1].totalAmount = state[0].foodItems.reduce((acc, elem) => acc + elem.totalPrice, 0);

      if (item.quantity === 0) {
        state[2] = state[2].filter((elem) => elem._id !== action.payload);
      } else {
        const cartItem = state[2].find((elem) => elem._id === action.payload);
        if (cartItem) {
          cartItem.quantity = item.quantity;
          cartItem.totalPrice =item.price * item.quantity;
        }
      }
        
    },
    getDescription: (state , action)=>{
     const  items = state[0].foodItems.find((elem)=>elem._id===action.payload);
     state[3].name = items.name;
     state[3].desc = items.description;
     state[3].pics = items.image
     state[3].isShow = true;
    }

  },
});

export const { filterItmes,selectItems,increaseQuantity,decreaseQuantity,getDescription } = MenuSlice.actions;
export default MenuSlice.reducer;

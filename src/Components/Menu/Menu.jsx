import MenuCard from "./MenuCard";
import MenuList from "./MenuList";
import Dropdown from "../Dropdown/Dropdown";
import { CgSearch } from "react-icons/cg";
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { filterItmes } from "../MenuSlice/MenuSlice";
function Menu() {
    const Food = useSelector(state=>state.Menu[0].foodItems);
    const Menu = useSelector(state=>state.Menu[0].menu_list);
    const dispatch = useDispatch()
  return (
    <div className="flex flex-col items-center gap-10 mt-10">
      <div className="flex flex-wrap w-1/2">
        {Menu.map((elem) => (
          <MenuList name={elem.menu_name} pics={elem.menu_image} />
        ))}
      </div>
      <div className="w-full flex justify-around items-center ">
        <div className="flex flex-col w-1/2">
          <h1 className="font-[600] text-2xl">What would you like to order</h1>
          <div className="flex items-center gap-4 ">
            <input type="text" className="border border-black w-4/5 text-xl p-2" placeholder="Enter Your Dish" onChange={(e)=>dispatch(filterItmes(e.target.value))}></input>
            <CgSearch className="text-2xl"/>
          </div>
        </div>
        <Button variant="contained" onClick={()=>dispatch(filterItmes("reset"))}>Complete Menu</Button>
        <Dropdown />
      </div>
      <div className="grid grid-cols-3 gap-28">
        {Food.map((elem) => (
          <MenuCard id={elem._id} name={elem.name} pics={elem.image} price={elem.price} quantity={elem.quantity} />
        ))}
      </div>
    </div>
  );
}

export default Menu;

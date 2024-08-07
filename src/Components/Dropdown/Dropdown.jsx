import { useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { menu_list } from "../../Assets/Food Del Frontend Assets/assets/assets";
import DropdownList from "./DropdownList";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import { filterItmes } from "../MenuSlice/MenuSlice";
function Dropdown() {
  const dispatch = useDispatch();
    const menuName = useSelector(state => state.Menu[0].chooseItem)
  const [display, setDisplay] = useState(false);
  const upRef = useRef(null);
  const downRef = useRef(null);
  const dropdownList = useRef(null);
  const handleDropDown = () => {
    setDisplay((prev) => !prev);
    if (display) {
      upRef.current.style.display = "none";
      downRef.current.style.display = "block";
      dropdownList.current.style.display = "block"
    } else {
      upRef.current.style.display = "block";
      downRef.current.style.display = "none";
      dropdownList.current.style.display = "none"
    }

  };
  
  return (
    <>
      <div className="w-1/4 flex flex-col gap-4 relative">
        <div
          className="w-full bg-gray-500 p-5 flex justify-between items-center cursor-pointer"
          onClick={handleDropDown}
        >
          <p className="text-white">{menuName}</p>
          <div>
            <div className="text-2xl  hidden" ref={downRef}>
              <MdOutlineKeyboardArrowDown />
            </div>

            <div className="text-2xl " ref={upRef}>
              <MdOutlineKeyboardArrowUp />
            </div>
          </div>
        </div>
        <div className="bg-gray-500 w-full p-5 overflow-y-scroll scr absolute top-10 hidden " ref={dropdownList}>
          <ul>
            {menu_list.map((elem) => (
              <DropdownList name={elem.menu_name} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dropdown;

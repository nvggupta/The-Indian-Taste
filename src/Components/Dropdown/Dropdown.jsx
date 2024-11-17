import { useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { menu_list } from "../../Assets/Food Del Frontend Assets/assets/assets";
import DropdownList from "./DropdownList";
import { useDispatch, useSelector } from "react-redux";
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
      <div className="md:w-1/4 flex flex-col gap-4 relative w-full">
        <div
          className="w-full bg-blue-500 hover:bg-blue-600 transition-colors p-5 flex justify-between items-center cursor-pointer rounded-md"
          onClick={handleDropDown}
        >
          <p className="text-white font-medium">{menuName}</p>
          <div>
            <div className="text-2xl text-white hidden" ref={downRef}>
              <MdOutlineKeyboardArrowDown />
            </div>

            <div className="text-2xl text-white" ref={upRef}>
              <MdOutlineKeyboardArrowUp />
            </div>
          </div>
        </div>
        <div className="bg-blue-500 w-full p-5 overflow-y-scroll max-h-60 absolute top-16 hidden rounded-md shadow-lg z-10" ref={dropdownList}>
          <ul className="space-y-2">
            {menu_list.map((elem, index) => (
              <DropdownList key={index} name={elem.menu_name} />
            ))}
          </ul>
        </div>
      </div>    </>
  );
}

export default Dropdown;

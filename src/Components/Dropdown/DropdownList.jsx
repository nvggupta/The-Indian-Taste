import { useDispatch } from "react-redux";
import { selectItems } from "../MenuSlice/MenuSlice";

function DropdownList({ name, setDisplay }) {
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(selectItems(name));
    setDisplay(false); // close dropdown
  };

  return (
    <div>
      <li
        className="text-white hover:bg-slate-50 hover:text-black p-2 cursor-pointer"
        onClick={handleClick}
      >
        {name}
      </li>
    </div>
  );
}

export default DropdownList;

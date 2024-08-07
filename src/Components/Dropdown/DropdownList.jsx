
import { useDispatch } from "react-redux";
import {selectItems } from "../MenuSlice/MenuSlice";

function DropdownList({name}) {
    const dispatch = useDispatch();
  return (
    <div>
      <li className='text-white hover:bg-slate-50 hover:text-black p-2 cursor-pointer ' onClick={()=>dispatch(selectItems(name))}>{name}</li>
    </div>
  )
}

export default DropdownList

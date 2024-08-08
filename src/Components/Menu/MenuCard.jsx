import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { increaseQuantity, decreaseQuantity } from "../MenuSlice/MenuSlice";

function MenuCard({ id, name, price, pics, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-between p-3 rounded-xl shadow-xl w-full sm:w-80 bg-white">
      <div>
        <img className="rounded-xl w-full" src={pics} alt="pics" />
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <p className="text-2xl font-semibold">{name}</p>
        <p className="text-xl">$ {price}</p>
        <div className="flex gap-4 text-sm">
          <p>Free Delivery</p>
          <p>15-30 mins</p>
        </div>
        <div className="flex flex-col gap-5 justify-between">
          {quantity !== 0 ? (
            <ADDItems id={id} quantity={quantity} />
          ) : (
            <Button onClick={() => dispatch(increaseQuantity(id))} variant="contained">
              Add To Cart
            </Button>
          )}
          <Link to={"/checkout"}>
            <Button variant="contained">Go TO Cart</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ADDItems({ quantity, id }) {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center">
      <Button onClick={() => dispatch(decreaseQuantity(id))} variant="contained">
        Sub
      </Button>
      <p>{quantity}</p>
      <Button onClick={() => dispatch(increaseQuantity(id))} variant="contained">
        Add
      </Button>
    </div>
  );
}

export default MenuCard;

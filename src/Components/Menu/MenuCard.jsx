import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { increaseQuantity, decreaseQuantity,getDescription } from "../MenuSlice/MenuSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MenuCard({ id, name, price, pics, quantity,  descShow  }) {
  const dispatch = useDispatch();
 const handleAddToCart = ()=>{
   dispatch(increaseQuantity(id));
}
  return (
    <>
      <div className="flex flex-col justify-between p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full md:w-80 bg-white">
        <div className="overflow-hidden rounded-xl">
          <img className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" src={pics} alt={name} />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <p className="text-xl md:text-2xl font-bold text-gray-800">{name}</p>
          <p className="text-lg md:text-xl font-semibold text-green-600">$ {price}</p>
          <div className="flex gap-6 text-sm text-gray-600">
            <p className="flex items-center">
              <span className="mr-1">🚚</span> Free Delivery
            </p>
            <p className="flex items-center">
              <span className="mr-1">⏱️</span> 15-30 mins
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-2">
            {quantity !== 0 ? (
              <ADDItems id={id} quantity={quantity} />
            ) : (
              <Button
                onClick={handleAddToCart}
                variant="contained"
                className="w-full py-2 text-base"
              >
                Add To Cart
              </Button>
            )}
            <div className="flex flex-col sm:flex-row gap-3 justify-between">
              <Link to={"/checkout"} className="w-full sm:w-auto">
                <Button variant="contained" className="w-full">Go TO Cart</Button>
              </Link>
              <Button 
                variant="contained" 
                onClick={()=>{dispatch(getDescription(id)); descShow(true)}}
                className="w-full sm:w-auto"
              >
                Description
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function ADDItems({ quantity, id }) {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center bg-gray-50 rounded-lg p-2">
      <Button
        onClick={() => dispatch(decreaseQuantity(id))}
        variant="contained"
        className="min-w-[40px]"
      >
        -
      </Button>
      <p className="font-semibold text-lg">{quantity}</p>
      <Button
        onClick={() => dispatch(increaseQuantity(id))}
        variant="contained"
        className="min-w-[40px]"
      >
        +
      </Button>
    </div>
  );
}

export default MenuCard;
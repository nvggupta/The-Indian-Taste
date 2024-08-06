import Button from '@mui/material/Button';
function MenuCard({name , price , pics}) {
  return (
    <div className="flex flex-col justify-between  p-3 rounded-xl shadow-xl w-fit ">
      <div className="">
        <img className='rounded-xl' src={pics} rel="pics"/>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-2xl">{name}</p>
        <p className="text-xl">$ {price}</p>
        <div className="flex gap-4">
          <p>Free Delivery</p>
          <p>15-30 mins</p>
        </div>
        <div className="flex flex-col gap-5 justify-between">
          <Button variant="contained">Add To Cart</Button>
          <Button variant="contained">Go TO Cart</Button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;

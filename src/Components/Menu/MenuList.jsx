function MenuList({ pics, name }) {
  return (
    <div className="flex flex-col items-center w-full sm:w-1/3 lg:w-1/4 p-2">
      <img className="w-full h-auto rounded-lg" src={pics} alt={name} />
      <p className="mt-2 text-center font-medium">{name}</p>
    </div>
  );
}

export default MenuList;

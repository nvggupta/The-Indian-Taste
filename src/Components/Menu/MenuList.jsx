function MenuList({ pics, name }) {
  return (
    <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2 transition-all duration-300 hover:transform hover:scale-105">
      <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl">
        <img 
          className="w-full h-auto object-cover rounded-lg md:max-w-[100px] lg:max-w-[120px]" 
          src={pics} 
          alt={name}
          loading="lazy"
        />
      </div>
      <p className="mt-3 text-center font-medium text-sm sm:text-base lg:text-lg text-gray-800 hover:text-gray-600">{name}</p>
    </div>
  );
}

export default MenuList;
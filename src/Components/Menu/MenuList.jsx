function MenuList({ pics, name }) {
  return (
    <div className="flex flex-col items-center w-40 p-4 flex-shrink-0">
      <div className="relative w-32 h-32 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          src={pics}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <p className="mt-3 text-center text-base font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-300">
        {name}
      </p>
    </div>
  );
}

export default MenuList;

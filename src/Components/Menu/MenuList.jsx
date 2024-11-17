function MenuList({ pics, name }) {
  return (
    <div>
      <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2 animate-scroll">
        <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl scrollbar-hide">
          <img 
            className="w-full h-auto object-cover rounded-lg md:max-w-[100px] lg:max-w-[120px]" 
            src={pics} 
            alt={name}
            loading="lazy"
          />
        </div>
        <p className="mt-3 text-center font-medium text-sm sm:text-base lg:text-lg text-gray-800 hover:text-gray-600">{name}</p>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes scrollReverse {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-scroll {
          animation: scroll 3s infinite linear forwards,
                     scrollReverse 3s infinite linear forwards;
          animation-delay: 0s, 3s;
        }
      `}</style>
    </div>
  );
}

export default MenuList;
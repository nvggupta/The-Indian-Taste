

function MenuList({pics , name}) {
  return (
    <div className="flex flex-col items-center w-1/4">
      <img src = {pics}/>
      <p>{name}</p>
    </div>
  )
}

export default MenuList

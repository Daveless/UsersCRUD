const Header = ({setIsShownForm}) => {
  return (
    <header className="flex justify-between w-[98%] sm:w-[90%]">
        <h1 className="text-3xl font-bold">Usuarios</h1>
        <button onClick={()=>setIsShownForm((isShownForm)=>!isShownForm)} className="bg-purple-p text-white p-2 hover:bg-purple-p/80 transition-colors text-sm"> <i className='bx bx-plus'></i>Crear nuevo usuario</button>
    </header>
  )
}
export default Header
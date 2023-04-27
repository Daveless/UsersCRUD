const Modal = ({ isShownForm, setIsShownForm, setIsUserIdToEdit, handleSubmit, register, handleSubmitForm, reset, isUserIdToEdit }) => {
  
  const handleModal = () => {setIsShownForm((isShownForm) => {
    !isShownForm;
    reset({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      birthday: '',
      image_url: '',
    })}
    
    )
    setIsUserIdToEdit(undefined)
  }
  
  return (
    <section
      className={`text-white fixed top-0 left-0 bottom-0 right-0 bg-black/40 flex justify-center items-center ${
        isShownForm ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <form onSubmit={handleSubmit(handleSubmitForm)}
        className="bg-white rounded p-4 grid gap-4 text-black w-[300px] relative"
        action=""
      >
        <h3 className="font-bold text-2xl">{isUserIdToEdit? 'Editar Usuario':'Nuevo Usuario'}</h3>
        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="first_name">
            Nombre
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            id="first_name"
            type="text"
            {...register('first_name')}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="last_name">
            Apellido
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            id="last_name"
            type="text"
            {...register('last_name')}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="email">
            Correo
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            id="email"
            type="email"
            {...register('email')}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="password">
            Contraseña
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            id="password"
            type="password"
            {...register('password')}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="birthday">
            Cumpleaños
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            id="birthday"
            type="date"
            {...register('birthday')}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="image_url">
            URL Imagen
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            id="image_url"
            type="text"
            {...register('image_url')}
          />
        </div>
        <i onClick={handleModal} className="bx bx-x absolute top-0 right-0 text-2xl hover:text-red-500"></i>
        <button className="bg-purple-p text-white p-2 hover:bg-purple-p/80 transition-colors text-sm">
        {isUserIdToEdit? 'Guardar Cambios':'Agregar nuevo usuario'}
        </button>
      </form>
    </section>
  );
};
export default Modal;

const UserCard = ({user, deleteUsers, handleClickEdit}) => {
  return (
    <div className="w-[100%] mx-auto bg-white my-4 py-4 px-5 border border-gray-500 rounded-lg">
        <div>
            <p className="font-semibold text-xl">{user.first_name} {user.last_name}</p>
        
            <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"/>

        <p className="text-gray-400 text-sm">EMAIL</p>
        <p className=" text-md mb-2">{user.email}</p>
        
        <p className="text-gray-400 text-sm">BIRTHDAY</p>
        <div className="flex items-center"><i className='bx bxs-cake'></i>
        <p className=" text-md ml-2">{user.birthday}</p></div></div>

        <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"/>
        <div className="flex items-center content-end justify-end text-2xl">
        <i onClick={() => deleteUsers(user.id)} className='bx bxs-trash-alt text-white bg-red-400 mr-2 border p-2 rounded-md'></i>
        <i onClick={() => handleClickEdit(user)} className='bx bxs-pencil text-white border p-2 bg-gray-300 rounded-md'></i>

        </div>
        
    </div>
  )
}
export default UserCard
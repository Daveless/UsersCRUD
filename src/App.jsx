import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Modal from './components/Modal'
import Header from './components/Header'
import { useForm } from 'react-hook-form'
import UserCard from './components/UserCard'

function App() {
  
const [isShownForm, setIsShownForm] = useState(false)
const { register, handleSubmit, reset } = useForm()
const [users, setUsers] = useState([])
const [isUserIdToEdit, setIsUserIdToEdit] = useState()

const handleSubmitForm = (data) => {
  if(!data.birthday){
    data.birthday=null
  } 
  if(!data.image_url){
    data.image_url=null
  } 
  isUserIdToEdit ? editUser(data):createUser(data)
};


const BASE_URL = 'https://users-crud.academlo.tech'
const DEFAULT_VALUES = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  birthday: '',
  image_url: '',
}


const getUsers = () => {
  axios.get(BASE_URL+'/users/')
  .then((res)=>setUsers(res.data))
  .catch((err)=>console.log(err))
}

const createUser = (data) =>{
const URL =  BASE_URL+'/users/'

  axios.post(URL, data)
  .then(() => 
  {getUsers()
  setIsShownForm(!isShownForm);
  reset(DEFAULT_VALUES)
  })
  .catch((err)=>console.log(err))
}

const deleteUsers = (id) => {
  const URL = BASE_URL + `/users/${id}/`;
  axios.delete(URL)
  .then(() => getUsers())
  .catch((err) => console.log(err))
}

const handleClickEdit = (data) =>{
  setIsShownForm((isShownForm) => !isShownForm)
  reset(data)
  setIsUserIdToEdit(data.id)
}

const editUser = (data) =>{
  const URL = BASE_URL + `/users/${isUserIdToEdit}/`;

  axios.patch(URL, data)
  .then(() => {
    getUsers()
    reset(DEFAULT_VALUES)
    setIsShownForm(!isShownForm)
    setIsUserIdToEdit(undefined)
  })
  .catch((err) => console.log(err))
}


  useEffect(()=>{
    getUsers()
  }, [])
  return (
    <main className='pt-5 w-[90%] mx-auto px-[0px] sm:px-10 max-w-[1500px] mx-auto min-h-screen flex-col text-black flex items-center'>
      <Header setIsShownForm={setIsShownForm}/>
      <Modal isShownForm={isShownForm} setIsShownForm={setIsShownForm} register={register} handleSubmit={handleSubmit} reset={reset} handleSubmitForm={handleSubmitForm} setIsUserIdToEdit={setIsUserIdToEdit} isUserIdToEdit={isUserIdToEdit}/>
      <div className='mt-5 w-full grid gap-10 auto-rows-auto grid-cols-[repeat(auto-fill,minmax(290px,1fr))] justify center'>{users.map(user => <UserCard key={user.id} user={user} deleteUsers={deleteUsers} handleClickEdit={handleClickEdit} />) }</div>
      
    </main>
  )
}

export default App

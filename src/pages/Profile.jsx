import { getAuth } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Profile = () => {
  const auth=getAuth();
  const navigate= useNavigate();

  const [formData,setFormData]=useState({
    name:auth.currentUser.displayName,
    email:auth.currentUser.email,
  });
  
  const {name,email}=formData
  const onLogout=()=>{
    try {
      auth.signOut();
      navigate("/")
    } catch (error) {
      toast.error("Error")
    }
  }
  return (
    <>
      <section className='max-w-6xl mx-auto flex items-center justify-center flex-col' >
      <h1 className='text-bold text-3xl text-center mt-6 font-mono'>My Profile</h1>  
      <div className='w-full md:w-[50%] mt-6 px-3'>
        <form>
          <input type='text' id='name' value={name} disabled className='mb-6 w-full px-4 py-2 text-xl text-gray-600 bg-white border-gray-300 rounded transition ease-in-out'/>
          <input type='email 'id ='email' value={email} disabled  className='mb-6 w-full px-4 py-2 text-xl text-gray-600 bg-white border-gray-300 rounded transition ease-in-out'/>
          <div className='flex justify-between whitespace-nowrap text-sm sm:text-xl mb-6'>
            <p  className='flex items-center '>Do you want of change your  name? <span className='text-red-600 hover:text-red-800 transition ease-in-out duration-200 ml-1 cursor-pointer' >Edit</span></p>
          <p onClick={onLogout} className='text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer'>Sign out</p>
          </div>
        </form>
      </div>
      </section>    
    </>
  )
}

export default Profile
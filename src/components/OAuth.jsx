import React from 'react'
import {FcGoogle} from"react-icons/fc"
const OAuth = () => {
  return (
   <button className='flex items-center justify-center w-full bg-red-600 text-white py-3 px-6 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 transition duration-150 ease-in-out shadow-md hover:shadow-lg active:shadow-lg rounded'><FcGoogle className='text-2xl bg-white rounded-full mr-2'/> Continue with Google</button>
  )
}

export default OAuth
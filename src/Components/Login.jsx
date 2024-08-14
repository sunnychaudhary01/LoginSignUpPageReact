import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <>
    <div className='flex items-center justify-center h-[100vh]'>
      <div className='h-[550px] w-[450px] border-solid shadow-2xl rounded-lg flex flex-col items-center justify-center gap-12'>
        <p className='text-4xl font-extrabold text-blue-700 underline underline-offset-4'>Login</p>
        <div className='w-full h-[200px] flex flex-col items-center justify-center gap-10'> 
        <div className='flex items-center justify-center w-full'>
        <MdEmail size={23} />
        <input className='h-[40px] w-[350px] border pl-4 ml-3 rounded-lg' placeholder='Enter email' type="text" />
        </div>
        <div className='flex items-center justify-center w-full'>
        <IoLockClosed size={23} />
        <input className='h-[40px] w-[350px] border pl-4 ml-3 rounded-lg' placeholder='Enter password' type="text" />
        </div>
        </div>
        <div className='w-full flex flex-col items-center justify-center'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white h-[35px] w-[110px] text-base font-bold rounded-2xl'>Login</button>
        <p className='mt-3'>If you don't have an account?&nbsp; <span className='text-blue-600 underline'>
          <Link  to={'/SignUp'}> Signup </Link> </span>
        </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
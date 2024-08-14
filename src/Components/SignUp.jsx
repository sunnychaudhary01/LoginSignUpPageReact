import React, {  useState  } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";


const SignUp = () => {
const [user,setUser] = useState('')
const [password,setPassword] = useState('')
const [isValidEmail,setIsValidEmail] = useState(true) 


const userName = /^[a-zA-Z0-9_]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/i;

const setUserHandler = (e) => { 
setUser(e.target.value)
 }

 
const emailId = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;


const setUserHandler2 = (e) => { 
setIsValidEmail(e.target.value)
const {value} = e.target
const isValidEmail  = emailId.test(value);
setIsValidEmail(isValidEmail)
}

const setUserHandler3 = (e) => { 
setPassword(e.target.value)
 }

  
const loginHandler = (e) => { 
    e.preventDefault();
   console.warn('working')
}

const navigate = useNavigate();
const handleButtonClick = () => {
  
  navigate('/read');
};

  return (
    <>
    <div className='flex items-center justify-center h-[100vh]' id='signUp'>
      <div className='h-[550px] w-[450px] border-solid shadow-2xl rounded-lg flex flex-col items-center justify-center gap-12'>
        <p className='relative bottom-[40px] text-4xl font-extrabold text-blue-700 underline underline-offset-4'>Sign up</p>
        
        <form onSubmit={loginHandler}>
        <div className='w-full h-[200px] flex flex-col items-center justify-center gap-7'> 
        
       <div className='flex  items-start justify-center w-full'>
        <IoMdPerson size={23} />
        <div className='relative bottom-2 flex flex-col ml-3  justify-start'>
        <input onChange={setUserHandler}  className='h-[40px] w-[350px] border-2 outline-none border-solid pl-4 ml-3 rounded-lg' placeholder='Enter Username' type="text" />
        {
          user.length <= 2 && user ? <p className='text-red-600 ml-4 pt-1 '>* Username should be more than 2 characters!</p> : " "
        }
        </div>
       </div>
        <div className='flex items-start justify-center w-full'>
        <MdEmail size={23} />
        <div className='relative bottom-2 flex flex-col ml-3  justify-start'>
        <input onChange={setUserHandler2}  className='h-[40px] w-[350px] border-2 outline-none border-solid pl-4 ml-3 rounded-lg' placeholder='Enter Email' type="text" />
        {
          !isValidEmail ? <p className='text-red-600 ml-4 pt-1 text-base '>Enter valid Email ! <br />Example:- user1@example.com </p> : " "
        }

        </div>
        </div>

        <div className='flex items-start justify-center w-full'>
        <IoLockClosed size={23} />
        <div className='relative bottom-2 flex flex-col ml-3 justify-start'>
        <input onChange={setUserHandler3}  className='h-[40px] w-[350px] border-2 outline-none border-solid pl-4 ml-3 rounded-lg' placeholder='Enter Password' type="Password" />
        
        {
          password.length < 8 && password ? <p className='text-red-600 ml-4 pt-1 '>* Password should be more than 8 characters!</p> : " "
        }
        </div>
        </div>

        </div>
        <div className='w-full flex flex-col items-center justify-center'>
        <button type='submit' onClick={handleButtonClick} className='bg-blue-500 hover:bg-blue-700 text-white h-[35px] w-[110px] text-base font-bold rounded-2xl relative top-9'>
        Sign up
        </button>
        <p className='relative top-12'>If you have already account? &nbsp;<span className='text-blue-600 underline'>
          <Link  to={'/Login'}>Login</Link> </span>
        </p>
        </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default SignUp
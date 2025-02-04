import React, { useState } from 'react'
import { useState} from 'react'
import { IoMailSharp } from 'react-icons/io5'
const login = ()=>   {
  const [email,setEmail]=useState('')
  return (
    <div className='h-screen flex justify-center items-centre bg-grey-100'>
      <div className='box-border flex flex-col border h-96 w-96 shadow-xl shadow-black-600' >
        <div>
          <h1 className='text-centre text-2xl font-bold'>User Login</h1>
        </div>
        <div className='flex justify-centre items-center'>
          <form className='w-full flex flex-col justify-center mt-5'>
            <div className='flex rounded-lg bg-sky-100 shadow-lg shadow-black-50 w-full h-10 justify-between items-center'>
              <input type="email" required autoComplete='email' name='email' value={email} placeholder='Email' onChange={(e)=>setEmail(e.target)} />
              <IoMailSharp />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default login

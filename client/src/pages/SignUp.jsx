import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign Up
      </h1>
      <form action="" method="post" className='flex flex-col gap-4'>
        <input className='border p-3 rounded-lg' type="text" placeholder='Name' name='name' />
        <input className='border p-3 rounded-lg' type="email" placeholder='Email' name='email' />
        <input className='border p-3 rounded-lg' type="password" placeholder='Password' name='password' />
        <button type='submit' className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70'>
          Sign Up
        </button>
      </form>
      <div className='flex gap-2 mt-5 justify-center'>
        <p>
          Already have an account?</p>
        <Link to={'/signin'} className='text-blue-500 hover:underline'>
          Sign In
        </Link>
      </div>
    </div>
  )
}

export default SignUp
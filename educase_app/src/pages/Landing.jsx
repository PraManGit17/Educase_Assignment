import React from 'react'

const Landing = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center p-1'>
      <div className='bg-gray-50 border-gray-200 border-2 rounded-md min-h-screen w-fit p-5 flex flex-col items-start justify-end gap-1 shadow-gray-300 shadow-lg'>
        <div className='text-2xl font-bold'>
          <h1>Welcome To PopX</h1>
        </div>

        <div className='text-md font-medium text-gray-400 flex flex-col mb-6'>
          <p>Lorem ipsum, dolor sit amet</p>
          <p>consectetur adipisicing elit</p>
        </div>

        <div className='flex flex-col gap-2'>
          <button className='px-10 py-2 bg-purple-600 rounded-lg text-white font-mono cursor-pointer'>Create Account</button>
          <button className='px-10 py-2 bg-purple-200 rounded-lg text-black font-bold cursor-pointer'>Already Registered? Login</button>
        </div>
      </div>
    </div>
  )
}

export default Landing

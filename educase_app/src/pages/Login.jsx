import React from 'react'

const Login = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center p-2 sm:p-4 md:p-8'>
      <div className='bg-gray-50 border-gray-200 border-2 rounded-md min-h-screen sm:min-h-[90vh] w-full
         max-w-sm p-5 flex flex-col items-start justify-start gap-3 shadow-gray-300 shadow-lg'>

        <div className='text-2xl sm:text-3xl font-semibold'>
          <p>Signin To your</p>
          <p>PopX account</p>
        </div>

        <div className='text-lg sm:text-md font-semibold text-gray-400 flex flex-col mb-6'>
          <p>Lorem ipsum, dolor sit amet</p>
          <p>consectetur adipisicing elit</p>
        </div>

        <div className='flex flex-col gap-3 w-full'>
          <div className="relative w-full">
            <label className="absolute -top-0 left-3 bg-white px-2 text-sm font-medium text-purple-700 z-10">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full py-2 px-3 border-2 border-gray-300 rounded-lg placeholder:text-gray-400 mt-3"
            />
          </div>

                <div className="relative w-full">
            <label className="absolute -top-0 left-3 bg-white px-2 text-sm font-medium text-purple-700 z-10">
              Password
            </label>
            <input
              type="passowrd"
              placeholder="Enter password"
              className="w-full py-2 px-3 border-2 border-gray-300 rounded-lg placeholder:text-gray-400 mt-3"
            />
          </div>

        </div>

        <div className='flex w-full'>
          <button className='w-full px-8 py-2 bg-gray-300 rounded-lg text-white font-normal cursor-pointer
          hover:bg-violet-700 hover:scale-102 transition-all'>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login

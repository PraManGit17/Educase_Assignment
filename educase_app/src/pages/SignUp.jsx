import React from 'react'

const SignUp = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center p-2 sm:p-4 md:p-8'>

      <div className='bg-gray-50 border-gray-200 border-2 rounded-md min-h-screen sm:min-h-[90vh] w-full
         max-w-sm p-5 flex flex-col justify-between items-start gap-5 shadow-gray-300 shadow-lg'>

        <div className='text-2xl sm:text-3xl font-semibold'>
          <p>Create your</p>
          <p>PopX account</p>
        </div>

        <div className='flex flex-col gap-4 w-full flex-grow'>
          <div className="relative w-full">
            <label className="absolute -top-0 left-3 bg-white px-2 text-sm font-medium text-purple-700 z-10">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full py-2 px-3 border-2 border-gray-300 rounded-lg placeholder:text-gray-400 mt-3"
              required
            />
          </div>

          <div className="relative w-full">
            <label className="absolute -top-0 left-3 bg-white px-2 text-sm font-medium text-purple-700 z-10">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full py-2 px-3 border-2 border-gray-300 rounded-lg placeholder:text-gray-400 mt-3"
              required
            />
          </div>

          <div className="relative w-full">
            <label className="absolute -top-0 left-3 bg-white px-2 text-sm font-medium text-purple-700 z-10">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full py-2 px-3 border-2 border-gray-300 rounded-lg placeholder:text-gray-400 mt-3"
              required
            />
          </div>

          <div className="relative w-full">
            <label className="absolute -top-0 left-3 bg-white px-2 text-sm font-medium text-purple-700 z-10">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full py-2 px-3 border-2 border-gray-300 rounded-lg placeholder:text-gray-400 mt-3"
              required
            />
          </div>

          <div className="relative w-full">
            <label className="absolute -top-0 left-3 bg-white px-2 text-sm font-medium text-purple-700 z-10">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Enter company name"
              className="w-full py-2 px-3 border-2 border-gray-300 rounded-lg placeholder:text-gray-400 mt-3"
            />
          </div>

          <div className="w-full">
            <label className="bg-white text-sm font-medium z-10">
              Are you an Agency?
            </label>

            <div className="flex items-center gap-6 py-2 rounded-md">
              <label className="flex items-center gap-2 text-gray-700">
                <input type="radio" name="isAgency" value="yes" className="accent-purple-600" required />
                Yes
              </label>

              <label className="flex items-center gap-2 text-gray-700">
                <input type="radio" name="isAgency" value="no" className="accent-purple-600" required />
                No
              </label>
            </div>
          </div>
        </div>


        <div className='w-full'>
          <button className='w-full px-8 py-2 bg-violet-700 rounded-lg text-white font-normal cursor-pointer'>
            Create Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp

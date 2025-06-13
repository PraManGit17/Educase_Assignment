import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {


  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: ''
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormdata({
      ...formdata,
      [name]: type === 'radio' ? value : value
    });
  };

  const CreateAcc = (e) => {
    e.preventDefault();

    localStorage.setItem('user', JSON.stringify(formdata));

    if(!formdata.fullName && !formdata.email && !formdata.password && !formdata.phone && !formdata.isAgency)
    {
      alert(" Required Fields Should Filled Out ");
    }
    else{
      navigate('/login');
    }
    
  }

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-2 sm:p-4 md:p-8'>

      <div className='bg-gray-50 border-gray-200 border-2 rounded-md min-h-screen sm:min-h-[90vh] w-full
         max-w-sm p-5 flex flex-col justify-between items-start gap-5 shadow-gray-300 shadow-lg'>

        <div className='text-2xl sm:text-3xl font-semibold'>
          <p>Create your</p>
          <p>PopX account</p>
        </div>

        <form className='flex flex-col gap-4 w-full flex-grow'>

          <div className="relative w-full">
            <label className="absolute -top-0 left-3 bg-gray-50 px-2 text-sm font-medium text-purple-700 z-10">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              name="fullName"
              value={formdata.fullName}
              onChange={handleChange}
              required
              className="w-full py-2 px-3 border-2 border-gray-300 rounded-lg placeholder:text-gray-400 mt-3"
            />
          </div>




          <div className="relative w-full">
            <label className="absolute -top-0 left-3 bg-gray-50 px-2 text-sm font-medium text-purple-700 z-10">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formdata.phone}
              onChange={handleChange}
              required
              placeholder="Enter phone number"
              className="w-full py-2 px-3 border-2 border-gray-300 rounded-lg placeholder:text-gray-400 mt-3"
            />
          </div>

          <div className="relative w-full">
            <label className="absolute -top-0 left-3 bg-gray-50 px-2 text-sm font-medium text-purple-700 z-10">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              required
              className="w-full py-2 px-3 border-2 border-gray-300 rounded-lg placeholder:text-gray-400 mt-3"
            />
          </div>

          <div className="relative w-full">
            <label className="absolute -top-0 left-3 bg-gray-50 px-2 text-sm font-medium text-purple-700 z-10">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={formdata.password}
              onChange={handleChange}
              required
              className="w-full py-2 px-3 border-2 border-gray-300 rounded-lg placeholder:text-gray-400 mt-3"
            />
          </div>

          <div className="relative w-full">
            <label className="absolute -top-0 left-3 bg-gray-50 px-2 text-sm font-medium text-purple-700 z-10">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Enter company name"
              name="company"
              value={formdata.company}
              onChange={handleChange}
              className="w-full py-2 px-3 border-2 border-gray-300 rounded-lg placeholder:text-gray-400 mt-3"
            />
          </div>

          <div className="w-full">
            <label className="bg-white text-sm font-medium z-10">
              Are you an Agency?
            </label>

            <div className="flex items-center gap-6 py-2 rounded-md">
              <label className="flex items-center gap-2 text-gray-700">
                <input type="radio" name="isAgency" value="yes" className="accent-purple-600" required
                  onChange={handleChange} />
                Yes
              </label>

              <label className="flex items-center gap-2 text-gray-700">
                <input type="radio" name="isAgency" value="no" className="accent-purple-600" required
                  onChange={handleChange} />
                No
              </label>
            </div>
          </div>
        </form>


        <div className='w-full'>
          <button className='w-full px-8 py-2 bg-violet-700 rounded-lg text-white font-normal cursor-pointer'
            onClick={CreateAcc}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp

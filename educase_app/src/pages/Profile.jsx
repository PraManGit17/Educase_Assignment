import React, { useState } from 'react'
import { FaCamera } from 'react-icons/fa';
import defaultimage from '../assets/default.jpg';
import { motion } from "framer-motion"

const Profile = () => {

  const [image, setImage] = useState(null);

  const loggedINuser = JSON.parse(localStorage.getItem('user'));

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.4 }}
      className='min-h-screen w-full flex items-center justify-center p-2 sm:p-4 md:p-8'>

      <div className='bg-gray-100 border-gray-200 border-2 rounded-md min-h-screen sm:min-h-[90vh] w-full
         max-w-sm flex flex-col items-start justify-start gap-2 shadow-gray-300 shadow-lg'>

        <div className='text-2xl sm:text-xl p-4 font-medium bg-white shadow-lg w-full'>
          <h1>Account Settings</h1>
        </div>

        <div className='flex flex-col gap-10 text-sm sm:text-md h-full p-5'>

          <div className="flex items-center gap-8">

            <div className="relative w-16 h-16">
              <img
                src={image || defaultimage}
                alt="Profile"
                className="rounded-full w-20 h-16 object-cover"
              />

              <label htmlFor="profileUpload">
                <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full cursor-pointer">
                  <FaCamera className="text-white text-sm" />
                  <input
                    type="file"
                    id="profileUpload"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>
              </label>
            </div>


            <div className="flex flex-col gap-1">
              <p className="text-md font-bold">{loggedINuser.fullName}</p>
              <p className="text-md font-medium text-gray-500">{loggedINuser.email}</p>
            </div>
          </div>

          <div className='text-md text-gray-600 font-medium w-full'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Magnam, assumenda autem eos cumque blanditiis harum dolore
            voluptas numquam.
          </div>
        </div>
        <hr className='border border-dashed border-gray-300 w-[100%]'></hr>

      </div>
    </motion.div>
  )
}

export default Profile
Profile
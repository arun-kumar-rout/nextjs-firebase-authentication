import React from 'react'
import Image from 'next/image'
import {FcGoogle} from 'react-icons/fc'

const page = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-white relative'>
      <Image className='absolute top-0 left-0 h-screen w-screen object-cover' src="/assets/images/sunset.jpg" alt='sunset' width={1200} height={600}/>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50'></div>

      <div className='z-10 flex justify-center items-center bg-white bg-opacity-60 pe-4 p-2 rounded-full cursor-pointer hover:shadow-md hover:bg-opacity-100 duration-150 ease-in-out'>
        <FcGoogle fontSize={30}/>
        <p className='text-lg font-semibold ml-4'>Sign in with Google</p>
      </div>
    </div>
  )
}

export default page

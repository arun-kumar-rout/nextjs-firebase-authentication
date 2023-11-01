"use client"
import React, {useEffect} from 'react';
import Image from 'next/image';
import {FcGoogle} from 'react-icons/fc';
// pushing user to another page
import { useRouter } from 'next/navigation';

// importing firebase google authentication
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {app} from "../../../firebase.config";

import { userAccessToken } from '../../../utils/fetchLocalUserDetails';



const Login = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const signIn = async () => {
    // adding popup functionality by google firebase
    const {user} = await signInWithPopup(firebaseAuth, provider);
    const {refreshToken, providerData} = user;
    
    // storing providerData and refreshToken in local browser
    localStorage.setItem("user",JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));

    // login user should be pushed to home page
    router.push('/')
    
  }
  // user having firebase access token can not access signin page again
  useEffect(() => {
    const accessToken = userAccessToken();
    if(accessToken) return router.push("/");
  }, [router]);
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-white relative'>
      <Image className='absolute top-0 left-0 h-screen w-screen object-cover' src="/assets/images/sunset.jpg" alt='sunset' width={1200} height={600}/>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50'></div>

      <div onClick={signIn} className='z-10 flex justify-center items-center bg-white bg-opacity-60 pe-4 p-2 rounded-full cursor-pointer hover:shadow-md hover:bg-opacity-100 duration-150 ease-in-out'>
        <FcGoogle fontSize={30}/>
        <p className='text-lg font-semibold ml-4'>Sign in with Google</p>
      </div>
    </div>
  )
}

export default Login

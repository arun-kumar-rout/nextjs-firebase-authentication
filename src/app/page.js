"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  userAccessToken,
  fetchUserDetails,
} from "../../utils/fetchLocalUserDetails";
import { useRouter } from "next/navigation";

import { IoLogOut } from "react-icons/io5";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    const accessToken = userAccessToken();
    if (!accessToken) return router.push("/login");

    const [userInfo] = fetchUserDetails();
    console.log(userInfo);
    setUser(userInfo);
  }, [router]);
  const logOut = () => {
    localStorage.clear();
    router.push("/login");
  }
  return (
    <div className="w-screen h-screen bg-slate-100 flex justify-center items-center">
      <div className="w-1/3 h-auto p-4 bg-white shadow-md rounded-md justify-start items-center relative">
        <IoLogOut onClick={logOut}
          fontSize={25}
          className="absolute top-8 right-3 cursor-pointer text-gray-600"
        />
        {user != undefined ? (
          <div className="flex">
            <Image className="rounded-xl object-cover" src={user.photoURL} alt="profile" width={50} height={50} />
            <div className="p-2">
              <h1>{user.displayName}</h1>
              <h1>{user.email}</h1>
            </div>
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
}

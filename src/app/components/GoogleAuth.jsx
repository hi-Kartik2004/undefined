"use client"
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const GoogleAuth = () => {
    
  return (
    <button onClick={ ()=>{ signIn('google');}} 
    className="w-full bg-black px-2 py-2.5 rounded-md font-semibold text-md duration-100 border border-gray-600 flex items-center justify-center gap-3 hover:bg-gray-900">
       <FcGoogle size={20} />   Login with Google
    </button>
  );
};

export default GoogleAuth;

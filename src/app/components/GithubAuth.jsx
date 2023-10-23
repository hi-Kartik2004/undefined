"use client"
import React from "react";
import { BsGithub } from "react-icons/bs";
import { signIn } from "next-auth/react";

const GithubAuth = () => {
  return (
    <button  onClick={ ()=>{ signIn('github');}} 
    className="w-full bg-black px-2 py-2.5 rounded-md font-semibold text-md duration-100 border border-gray-600 flex items-center justify-center gap-3 hover:bg-gray-900">
    <BsGithub size={20} /> Login with Github
    </button>
  );
};

export default GithubAuth;
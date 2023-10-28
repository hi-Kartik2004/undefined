"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import session from "express-session";

const GoogleAuth = () => {
  const router = useRouter();
  const handleGoogleLogin = async () => {
    const result = await signIn("google", {
      redirect: false,
      callbackUrl: "/",
    });

    // Check if the login was successful and user details are available
    if (result?.error) {
      // Handle login error if needed
      console.error("Google login failed:", result.error);
    } else if (result?.user) {
      const username = result.user.email.split("@")[0];
      const userWithUsername = { ...result.user, username };
      sessionStorage.setItem("user", JSON.stringify(userWithUsername));

      router.push(`/creator/${result.user.email.split("@")[0]}}`);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full bg-black px-2 py-2.5 rounded-md font-semibold text-md duration-100 border border-gray-600 flex items-center justify-center gap-3 hover:bg-gray-900"
    >
      <FcGoogle size={20} /> Login with Google
    </button>
  );
};

export default GoogleAuth;

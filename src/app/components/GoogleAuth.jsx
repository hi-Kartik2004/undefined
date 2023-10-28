"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; 
const GoogleAuth = () => {
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);

  const handleGoogleLogin = async () => {
    try {
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

        // Update sessionStorage with user and token details
        sessionStorage.setItem("user", JSON.stringify(userWithUsername));
        sessionStorage.setItem("token", result.user.accessToken);

        // Set the redirecting state to true to control the redirection
        setRedirecting(true);
      }
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  // Perform redirection only when redirecting state is true
  if (redirecting) {
    router.push(`/creator/${sessionStorage.getItem("user").username}`);
    return null; // Prevent rendering anything while redirecting
  }

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

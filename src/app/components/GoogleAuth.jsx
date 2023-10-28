"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const GoogleAuth = () => {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      const result = await signIn("google", {
        redirect: false,
        callbackUrl: "/creator/1",
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

        // Redirect to the user's profile page after successful login
        router.push(`/creator/${username}`);
      }
    } catch (error) {
      console.error("Google login error:", error);
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

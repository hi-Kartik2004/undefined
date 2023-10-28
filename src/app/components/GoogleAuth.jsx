"use client";
import React, { useEffect, useState } from "react";
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
        callbackUrl: "/success?userType=1",
      });

      if (result?.error) {
        // Handle login error if needed
        console.error("Google login failed:", result.error);
      } else if (result?.user) {
        user["userType"] = 1;
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

  useEffect(() => {
    // Redirect only when redirecting state is true and user and token are set in sessionStorage
    if (
      redirecting &&
      sessionStorage.getItem("user") &&
      sessionStorage.getItem("token")
    ) {
      const username = JSON.parse(sessionStorage.getItem("user")).username;
      router.push(`/creator/${username}`);
    }
  }, [redirecting]);

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

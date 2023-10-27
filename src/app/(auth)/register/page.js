"use client";
import React, { useRef, useState } from "react";
import Input from "../../components/Input";
import HeroBtn from "../../components/HeroBtn";
import Divider from "../../components/Divider";
import Link from "next/link";
import Password from "../../components/Password";
import BackTopNav from "../../components/BackTopNav";
import GoogleAuth from "../../components/GoogleAuth";
import GithubAuth from "../../components/GithubAuth";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import PageLoader from "@/app/components/pageloader/Pageloader";

const register = () => {
  const { status } = useSession();
  const router = useRouter();
  const token = sessionStorage.getItem("token");
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [userType, setUserType] = useState("creator");

  if (status === "loading") {
    return <PageLoader />;
  }

  if (status === "authenticated" || token) {
    if (typeof window === "undefined") {
      router.replace("/profile");
      return null;
    }

    router.push("/profile");
    return <PageLoader />;
  }

  const handleRadioChange = (e) => {
    setUserType(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      alert("Password mismatch!");
      return;
    }

    const formData = {
      username: emailRef.current.value.split("@")[0],
      email: emailRef.current.value,
      password: passwordRef.current.value,
      image: "https://placehold.co/100",
    };

    if (userType === "creator") {
      fetch("https://uploadmate-api.vercel.app/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const { token, email } = data;
          const user = JSON.stringify(data);
          sessionStorage.setItem("user", user);
          sessionStorage.setItem("token", token);
          router.push(`/creator/${email.split("@")[0]}`);
        })
        .catch((error) => {
          alert("Error:", error);
        });
    } else {
      fetch("https://uploadmate-api.vercel.app/api/editor/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const { token, email } = data;
          const user = JSON.stringify(data);
          sessionStorage.setItem("user", user);
          sessionStorage.setItem("token", token);
          router.push("/editor");
        })
        .catch((error) => {
          alert("Error:", error);
        });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <BackTopNav route="/" text="Home" location="left" />
      <BackTopNav route="/login" text="Login" location="right" />
      <div className="max-w-[475px]  w-full flex items-center justify-center flex-col gap-2 my-2 rounded-lg px-5 py-5 card-color sm:my-[2rem] mt-[3.5rem]">
        <div className="w-full flex justify-center my-2">
          <img src="./digital arrow.png" alt="logo" className="logo-size" />
        </div>

        <div className="max-w-[400px] w-full">
          <div className="my-5">
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="text-light-color text-sm my-2">
              Let's get you Registered!
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <form
              className="flex flex-col gap-6 w-full"
              onSubmit={handleFormSubmit}
            >
              <div>
                <Input label="Email" type="text" ref={emailRef} />
              </div>

              <div>
                <Password label="Password" type="password" ref={passwordRef} />
              </div>

              <div>
                <Password
                  label="Confirm Password"
                  type="password"
                  ref={confirmPasswordRef}
                />
              </div>

              <div className="flex justify-around">
                <label className="flex gap-2">
                  <input
                    onChange={handleRadioChange}
                    type="radio"
                    name="user"
                    value="creator"
                    required
                  />{" "}
                  <p>Creator</p>
                </label>

                <label className="flex gap-2">
                  <input
                    onChange={handleRadioChange}
                    type="radio"
                    name="user"
                    value="editor"
                    required
                  />{" "}
                  <p>Editor</p>
                </label>
              </div>

              <div>
                <HeroBtn text="Register" />
              </div>
            </form>

            <Divider text="OR" />

            <GoogleAuth />
            <GithubAuth />
            {/* <BlackBtn text="Register with Google" icon="google" /> */}

            {/* <BlackBtn text="Register with Github" icon="github" /> */}

            <Link
              href="/login"
              className="text-sm my-2 underline underline-offset-8 text-light-color text-center w-full"
            >
              Login at UploadMate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default register;

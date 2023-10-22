import React from "react";
import Input from "../components/Input";
import HeroBtn from "../components/HeroBtn";
import Divider from "../components/Divider";
import BlackBtn from "../components/BlackBtn";
import Link from "next/link";
import Password from "../components/Password";
import BackTopNav from "../components/BackTopNav";

const login = () => {
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
            <div>
              <Input label="Email" type="text" />
            </div>

            <div>
              <Password label="Password" type="password" />
            </div>

            <div>
              <Password label="Confirm Password" type="password" />
            </div>

            <div>
              <HeroBtn text="Register" />
            </div>

            <Divider text="OR" />

            <BlackBtn text="Register with Google" icon="google" />

            <BlackBtn text="Register with Github" icon="github" />

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

export default login;

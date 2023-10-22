import React from "react";
import Input from "../components/Input";
import HeroBtn from "../components/HeroBtn";
import Divider from "../components/Divider";
import BlackBtn from "../components/BlackBtn";
import Link from "next/link";
import Password from "../components/Password";

const login = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-[475px]  w-full flex items-center justify-center flex-col gap-2 my-2 rounded-lg px-5 py-5 card-color">
        <div className="w-full flex justify-center my-2">
          <img src="./digital arrow.png" alt="logo" className="logo-size" />
        </div>

        <div className="max-w-[400px] w-full">
          <div className="my-5">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-light-color text-sm my-2">
              Let's get you logged in!
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
              <HeroBtn text="Login" />
            </div>

            <Divider text="OR" />

            <BlackBtn text="Login with Google" icon="google" />

            <BlackBtn text="Login with Github" icon="github" />

            <Link
              href="/register"
              className="text-sm my-2 underline underline-offset-8 text-light-color text-center w-full"
            >
              Register at UploadMate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default login;

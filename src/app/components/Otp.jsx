import React from "react";
import BackTopNav from "./BackTopNav";
import Input from "../components/Input";
import HeroBtn from "./HeroBtn";
import BlackBtn from "./BlackBtn";

const Otp = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center">
        <BackTopNav route="/" text="Edit" location="left" />
        {/* <BackTopNav route="/login" text="Login" location="right" /> */}
        <div className="max-w-[475px]  w-full flex items-center justify-center flex-col gap-2 my-2 rounded-lg px-5 py-5 card-color sm:my-[2rem] mt-[3.5rem]">
          <div className="w-full flex justify-center my-2">
            <img src="./digital arrow.png" alt="logo" className="logo-size" />
          </div>

          <div className="max-w-[400px] w-full">
            <div className="my-5">
              <h1 className="text-3xl font-bold">Email Verification</h1>
              <p className="text-light-color text-sm my-2">
                Enter the OTP Sent to your Email.
              </p>

              <div className="flex flex-col gap-6 w-full my-6">
                <div>
                  <Input type="text" placeholder="Enter OTP" />
                </div>
                <HeroBtn text="Verify" />
                <p className=" text-left underline underline-offset-8 text-gray-400 hover:text-white duration-200 ease-in-out cursor-pointer">Resend OTP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Otp;

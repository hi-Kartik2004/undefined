import Input from "@/app/components/Input";
import Link from "next/link";
import React from "react";
import { LiaUploadSolid } from "react-icons/lia";
import { MdAccountCircle } from "react-icons/md";
import { BiSolidBell } from "react-icons/bi";

const page = ({ params }, props) => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="max-w-[1480px] w-full flex gap-12">
        <aside className="max-w-[200px] py-4 h-screen flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <div className="my-3">
              <img
                src="../digital arrow.png"
                alt="logo"
                className="logo-size"
              />
            </div>

            <Link
              href="/"
              className="flex gap-2 p-2 w-full rounded-lg nav__link duration-300 ease-in-out"
            >
              <LiaUploadSolid size={20} />
              <p>Drafts (4)</p>
            </Link>

            <Link
              href="/"
              className="flex gap-2 p-2 w-full rounded-lg nav__link duration-300 ease-in-out"
            >
              <LiaUploadSolid size={20} />
              <p>Uploads (4)</p>
            </Link>

            <Link
              href="/"
              className="flex gap-2 p-2 w-full rounded-lg nav__link duration-300 ease-in-out"
            >
              <LiaUploadSolid size={20} />
              <p>Issues (1)</p>
            </Link>

            <Link
              href="/"
              className="flex gap-2 p-2 w-full rounded-lg nav__link duration-200 ease-in-out"
            >
              <LiaUploadSolid size={20} />
              <p>Editors (1)</p>
            </Link>

            <Link
              href="/"
              className="flex gap-2 p-2 w-full rounded-lg nav__link duration-300 ease-in-out"
            >
              <LiaUploadSolid size={20} />
              <p>My Cloud</p>
            </Link>
          </div>

          <div>
            <Link
              href="/"
              className="flex gap-2 p-2 w-full rounded-lg nav__link duration-300 ease-in-out"
            >
              <LiaUploadSolid size={20} />
              <p>My Plan</p>
            </Link>

            <Link
              href="/"
              className="flex gap-2 p-2 w-full rounded-lg nav__link duration-300 ease-in-out"
            >
              <LiaUploadSolid size={20} />
              <p>Settings</p>
            </Link>

            <Link
              href="/"
              className="flex gap-2 p-2 w-full rounded-lg nav__link duration-300 ease-in-out"
            >
              <LiaUploadSolid size={20} />
              <p>Logout</p>
            </Link>
          </div>
        </aside>

        <div className="dashboard w-full h-[95vh] my-4 bg-light rounded-xl border border-gray-500 py-4 px-4 flex flex-col gap-10">
          <div className="flex w-full justify-between">
            <form className="max-w-[500px] w-full">
              <Input
                placeholder="Search for files"
                type="text"
                dark="true"
                rounded=""
                search="true"
              />
            </form>

            <div className="dashboard__links max-w-[300px] w-full flex justify-end gap-5">
              <Link
                href="/"
                className="rounded-md bg-color p-1 flex justify-center items-center w-[40px] h-[40px] border border-gray-500"
              >
                <MdAccountCircle size={25} />
              </Link>
              <Link
                href="/"
                className="rounded-md bg-color p-1 flex justify-center items-center w-[40px] h-[40px] border border-gray-500"
              >
                <BiSolidBell size={25} />
              </Link>
            </div>
          </div>

          <div className="dashboard__content w-full h-full flex justify-between pl-2">
            <h1 className="text-2xl">Uploads (4)</h1>
            <select className=" outline-none px-2 max-w-[120px] w-full h-[40px] rounded-lg bg-color text-light-color">
              <option value="e">Earliest</option>
              <option value="e">Download Pending</option>
              <option value="e">Review Pending</option>
              <option value="e">Issues Raised</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

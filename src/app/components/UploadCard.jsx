import Link from "next/link";
import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { BiSolidVideo } from "react-icons/bi";
import { HiPhotograph } from "react-icons/hi";
import { RiMenu5Line } from "react-icons/ri";

const UploadCard = ({ details }) => {
  //   console.log(details);
  return (
    <>
      <div className="p-4 max-w-[375px] rounded-xl w-full bg-color relative border border-gray-500">
        <Link href={`?upload=${details.id}`} className="text-md ">
          {details.title}
        </Link>
        {details.files &&
          details.files.slice(0, 3).map((file, index) => {
            let icon = <AiOutlineLink size={20} />; // default icon

            const extension = file.split(".").pop().toLowerCase();
            if (["jpg", "jpeg", "png", "gif"].includes(extension)) {
              icon = <HiPhotograph size={20} />;
            } else if (["mp4", "avi", "mov"].includes(extension)) {
              icon = <BiSolidVideo size={20} />;
            }

            return (
              <div
                className="w-full card-color my-4 p-2 rounded-lg flex justify-between items-center"
                key={index}
              >
                <p>{file}</p>
                {icon}
              </div>
            );
          })}

        <div className="w-full flex justify-between items-center my-4">
          <div className="flex gap-2 items-center group relative cursor-pointer">
            <RiMenu5Line
              className="cursor-pointer bg-light p-[2px] rounded-sm duration-200 ease-in-out group-hover:bg-gray-600"
              size={20}
            />

            <p className="text-[0.7rem] opacity-0 group-hover:opacity-100 rounded">
              Menu
            </p>
          </div>
          <p className="text-sm">
            {details.count > 3 ? details.count - 3 + " more" : ""}
          </p>
        </div>

        <div className="w-full flex justify-between items-end">
          <div>
            <p>{details.count} Files inside</p>
            <p className="text-sm text-gray-400">{details.time}</p>
          </div>

          <div>
            <div
              className={`p-1.5 ${
                details.status == 1
                  ? "bg-yellow-900"
                  : details.status == 2
                  ? "bg-blue-900"
                  : details.status == 3
                  ? "bg-green-900"
                  : details.status == 0
                  ? "bg-red-900"
                  : "bg-gray-900"
              } border border-gray-500 rounded-lg text-xs`}
            >
              <p>
                {details.status == 1
                  ? "All Files Uploaded"
                  : details.status == 2
                  ? "Files Downloaded"
                  : details.status == 3
                  ? "Draft Video Exists"
                  : details.status == 0
                  ? "Issues Raised"
                  : "Unable to track progress"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadCard;

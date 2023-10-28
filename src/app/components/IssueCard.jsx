"use client";
import React from "react";
import Dropdown from "./Dropdown";
import { CgOptions } from "react-icons/cg";
import GetUser from "./GetUser";

const IssueCard = ({ details }) => {
  <GetUser />;
  const resp = GetUser();
  let user = resp.user;

  return (
    <>
      <div className="p-4 max-w-[550px] w-full bg-color border border-gray-500 hover:border-gray-200 rounded-xl">
        <div className="text-md flex items-center gap-2 flex-wrap w-full">
          <span className="light-text-color">#12</span>{" "}
          <p className="overflow-hidden overflow-ellipsis text-lg whitespace-normal max-w-[calc(100% - 1.5rem)] line-clamp-2 text-color">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <p className="text-sm mt-2 overflow-hidden overflow-ellipsis light-text-color whitespace-normal max-w-[calc(100% - 1.5rem)] line-clamp-3 text-color">
          Lorem ipsum dolor sit amet consectetur
        </p>

        <div className="flex justify-between mt-4 items-end">
          <div className="flex flex-col gap-1">
            <p className="text-sm">Raised by: Name</p>
            <p className="text-sm">Linked draftId: {details.draftId}</p>
          </div>

          <div className="flex flex-col gap-1 items-end">
            <div className="max-w-[50px]">
              <Dropdown
                icon={<CgOptions />}
                links={[
                  {
                    text: "View Issue",
                    href: `/${
                      user && user.userType === 1 ? "creator" : "editor"
                    }/${user && user.username}/issues?view=${details._id}`,
                  },
                  {
                    text: "View Comments",
                    href: `/${
                      user && user.userType === 1 ? "creator" : "editor"
                    }/${user && user.username}/issues?comments=${details._id}`,
                  },
                  {
                    text: "View Draft",
                    href: `/${
                      user && user.userType === 1 ? "creator" : "editor"
                    }/${user && user.username}/drafts?play=${details.draftId}`,
                  },
                  {
                    text: "Delete Issue",
                    href: `/${
                      user && user.userType === 1 ? "creator" : "editor"
                    }/${user && user.username}/issues?delete=${details._id}`,
                  },
                ]}
              />
            </div>

            <p className="text-sm"> {details.createdAt}</p>
            <p className="text-sm">
              {details.status} | {details.priority}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IssueCard;

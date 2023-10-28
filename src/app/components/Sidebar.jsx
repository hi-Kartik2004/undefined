import React from "react";
import Link from "next/link";
import IconLink from "./IconLink";

const Sidebar = (props) => {
  const navLinks = ["Drafts", "Uploads", "Issues", "Members", "Cloud"];
  return (
    <>
      <div className="hidden md:block h-full">
        <aside className="max-w-[200px] py-4 max-h-screen h-full flex flex-col justify-between">
          <div className="flex flex-col gap-2 h-full">
            <div className="my-3">
              <img src="/digital arrow.png" alt="logo" className="logo-size" />
            </div>

            <div>
              {navLinks.map((link, index) => {
                return (
                  <IconLink
                    text={link}
                    href={`${link}`}
                    count={4}
                    key={index}
                    userType={props.userType}
                    username={props.username}
                  />
                );
              })}
            </div>
          </div>

          <div>
            <IconLink
              text="My Plan"
              href="/plan"
              userType={props.userType}
              username={props.username}
            />
            {/* <IconLink
              text="Settings"
              href="/settings"
              userType={props.userType}
              username={props.username}
            /> */}
            <IconLink text="Logout" href="/logout" />
          </div>
        </aside>
      </div>

      <div className="flex fixed top-0 md:hidden w-full flex-col justify-center min-h-[93vh] card-color">
        <aside className="w-full p-4 flex items-start justify-start flex-col gap-2">
          <h3 className="text-md" my-2>
            Navlinks
          </h3>
          {navLinks.map((link, index) => {
            return (
              <div key={index}>
                <IconLink text={link} count={4} />
              </div>
            );
          })}

          <div className="mt-10">
            <h3 className="text-md" my-2>
              Personal
            </h3>
            <IconLink text="Notification" href="/notifications" />
            <IconLink text="My Plan" href="/plan" />
            <IconLink text="Settings" href="/settings" />
            <IconLink text="Logout" href="/logout" />
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;

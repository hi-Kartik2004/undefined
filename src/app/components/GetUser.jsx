"use client";
import React from "react";

const GetUser = () => {
  let user;
  if (typeof window !== "undefined") {
    user = sessionStorage.getItem("user");
    user = JSON.parse(user);
  }

  return user;
};

export default GetUser;

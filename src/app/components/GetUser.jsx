"use client";
import React from "react";

const GetUser = () => {
  let user;
  let token;
  if (typeof window !== "undefined") {
    token = sessionStorage.getItem("token");
    user = sessionStorage.getItem("user");
    user = JSON.parse(user);
  }

  return {user, token};
};

export default GetUser;

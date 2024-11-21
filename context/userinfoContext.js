"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({});

 useEffect(() => {

    const localUserinfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    setUserInfo(localUserinfo);

    if (Object.keys(localUserinfo).length === 0) {
            router.replace('/login');
    }
}, [router]);

useEffect(() => {
  if (Object.keys(userInfo).length > 0) {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }
}, [userInfo]);

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfoContext = () => {
  const context = useContext(UserInfoContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

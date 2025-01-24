"use client";
import "@/app/globals.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "../not-found";
import { verifyAdminAction } from "@/lib/features/admin/adminAction";
import { useEffect } from "react";
import { handleAdminInfo } from "@/lib/features/admin/adminSlide";

// Layout for admin home

export default function AdminLayout({ children }) {
  const dispatch = useDispatch();
  const adminInfo = useSelector((state) => state.adminSlide.adminInfo);
  console.log("adminInfo: ", adminInfo);
  const isAdmin = useSelector((state) => state.adminSlide.isAdmin);
  console.log("isAdmin: ", isAdmin);

  useEffect(() => {
    console.log("test dispatch");
    dispatch(verifyAdminAction());
  }, []);

  // if (!isAdmin) {
  //   return <NotFound />;
  // }
  return (
    <>
      {/* ADMIN LAYOUT */}
      <div className="h-screen flex">
        <div className="dashboard bg-indigo-400 w-1/5">
          <h1>Dashboard</h1>
          <div className="navigate">
            <Link href={"/admin"}>Home</Link>
            <Link href={"/admin/user"}>Users</Link>
          </div>
        </div>
        <div className="main w-4/5">
          <h1>click btn to show admin data</h1>
          <button
            className="bg-teal-400 p-3 rounded text-white ml-4"
            onClick={() => {
              const payload = {
                taiKhoan: "BC77",
                hoTen: "random Name",
                soDT: "123456789",
                email: "testEmail@gmail.com",
              };
              dispatch(handleAdminInfo(payload));
            }}
          >
            show
          </button>
          <div className="info">
            <p>Tai Khoan: {adminInfo.adminAccount}</p>
            <p>Name: {adminInfo.adminName}</p>
            <p>Phone: {adminInfo.adminPhone}</p>
            <p>Email: {adminInfo.adminEmail}</p>
          </div>
          <div className="children text-center text-3xl text-red-500 py-5">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

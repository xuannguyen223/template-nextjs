"use client";
import "@/app/globals.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "../not-found";
import { verifyAdminAction } from "@/lib/features/admin/adminAction";
import { useEffect } from "react";

// Layout for admin home

export default function AdminLayout({ children }) {
  const dispatch = useDispatch();
  const adminInfo = useSelector((state) => state.adminSlide.adminInfo);
  const isAdmin = useSelector((state) => state.adminSlide.isAdmin);

  useEffect(() => {
    dispatch(verifyAdminAction());
  }, [dispatch]);

  if (!isAdmin) {
    return <NotFound />;
  }
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
        <div className="main w-4/5">{children}</div>
      </div>
    </>
  );
}

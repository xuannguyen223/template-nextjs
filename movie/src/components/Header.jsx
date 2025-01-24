import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="text-white bg-indigo-400 text-2xl text-center ">
      <h1>Header</h1>
      <div className="navigate flex justify-center gap-6">
        <Link href={"/"}>Home</Link>
        <Link href={"/register"}>Register</Link>
        <Link href={"/login"}>Login</Link>
        <Link href={"/admin"}>Admin</Link>
      </div>
    </header>
  );
};

export default Header;

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";


const Navbar = () => {
  const router = useRouter()
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-10 py-3 text-black">
        <li className="txtHover active font-medium">
          <Link  className={router.pathname == "/" ? "text-primary-600" : "text-black"}
    href="/">Home</Link>
        </li>
        <li className="txtHover active font-medium">
          <Link className={router.pathname == "/categories" ? "text-primary-600" : "text-black"} href="/categories">Shop</Link>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <Link className={router.pathname == "/blog" ? "text-primary-600" : "text-black"} href="/blog">Blog</Link>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <Link className={router.pathname == "/about" ? "text-primary-600" : "text-black"} href="/about">About us</Link>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <Link className={router.pathname == "/contact" ? "text-primary-600" : "text-black"} href="/contact">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

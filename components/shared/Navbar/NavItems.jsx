import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";


const NavItems = () => {
  const router = useRouter()
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-10 py-3 text-black">
        <li className="txtHover font-medium">
          <Link  className={router.pathname == "/" ? "text-primary-600" : "text-gray-700"}
    href="/">Home</Link>
        </li>
        <li className="txtHover font-medium">
          <Link className={router.pathname == "/categories" ? "text-primary-600" : "text-gray-700"} href="/categories">Shop</Link>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <Link className={router.pathname == "/blog" ? "text-primary-600" : "text-gray-700"} href="/blog">Blog</Link>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <Link className={router.pathname == "/about" ? "text-primary-600" : "text-gray-700"} href="/about">About us</Link>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <Link className={router.pathname == "/contact" ? "text-primary-600" : "text-gray-700"} href="/contact">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;

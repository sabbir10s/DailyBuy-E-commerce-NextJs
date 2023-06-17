import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";


const NavItems = () => {
  const router = useRouter()
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-8 py-3 font-medium">
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
        <div className="relative group">
                    <button
                        className="flex items-center py-2 font-medium text-gray-700 hover:text-primary-600 focus:outline-none">
                        <span>pages</span>
                        <svg className="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
                            <path d="M10 12l-5-5 1.41-1.41L10 9.18l3.59-3.59L15 7l-5 5z"/>
                        </svg>
                    </button>
                    <ul
                        className="absolute z-10 left-0 mt-0 w-48 p-3 bg-white border border-gray-300 rounded-md shadow-lg hidden group-hover:block space-y-3">
                         
                          <li
                            className={router.pathname == "/invoice" ? "text-primary-600" : "text-gray-700"}>
                              <Link href="/invoice">Invoice</Link>
                          </li>
                          <li
                            className={router.pathname == "/profile" ? "text-primary-600" : "text-gray-700"}>
                              <Link href="/profile">Account</Link>
                          </li>
                          <li
                            className={router.pathname == "/faq" ? "text-primary-600" : "text-gray-700"}>
                              <Link href="/faq">FAQ</Link>
                          </li>
                          <li
                            className={router.pathname == "/aboutV2" ? "text-primary-600" : "text-gray-700"}>
                              <Link href="/aboutV2">About Version 2</Link>
                          </li>
                    </ul>
                </div>
      </ul>
    </nav>
  );
};

export default NavItems;

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center py-3 space-x-8 text-black">
        <li className="txtHover active font-medium">
          <Link href="/">Home</Link>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <Link href="/products">Products</Link>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <Link href="/blog">Blog</Link>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <Link href="/about">About us</Link>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <Link href="/contact">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

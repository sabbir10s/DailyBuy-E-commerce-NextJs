import Link from "next/link";
import React from "react";


const Navbar = (props) => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-10 py-3 text-black">
        <li className="txtHover active font-medium">
          <Link href="/">Home</Link>
        </li>
        <li className="txtHover active font-medium">
          <Link href="/categories">Shop</Link>
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

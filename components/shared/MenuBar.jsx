import Link from "next/link";
import React from "react";
import fruits from '../../assets/icon/category/Fruits & Vegetable.png'
import meats from '../../assets/icon/category/Meats & Fish.png'
import breads from '../../assets/icon/category/Breads & Bakery.png'
import frozen from '../../assets/icon/category/Frozen Foods.png'
import breakfast from '../../assets/icon/category/Breakfast & Dairy.png'
import biscuits from '../../assets/icon/category/Biscuits & Snacks.png'
import beverages from '../../assets/icon/category/Beverages.png'
import grocery from '../../assets/icon/category/Grocery.png'
import Image from "next/image";

const MenuBar = () => {
  return (
    <nav className="container hidden lg:block">
      <ul className="flex items-center py-3 space-x-8">
        <div className="relative group">
          <li
            className="uppercase text-xl p-3 w-[267px]  text-center bg-primary-600 text-white rounded-t-md cursor-pointer space-x-2 font-semibold">
            <span className="lg:hidden xl:inline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline-block -mt-1">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
              </svg>
            </span>
            <span>Categories</span>
            <span className="lg:hidden xl:inline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 inline-block">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
              </svg>
            </span>
          </li>
          <div
            className="shadow-custom opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white hidden lg:block rounded-b-md absolute top-12 left-0 w-full transition duration-300 delay-100 ease-in-out">
            <li
              className="p-3 border-b border-gray-1er text-gray-6 hover:text-primary-600">
              <Link className="flex items-center gap-[8px]" href='/categories'>
                <Image className="w-[25px]" src={fruits} alt=""/>
                <span>Fruits & Vegetable</span>
              </Link>
            </li>
            <li
              className="p-3 border-b border-gray-100 text-gray-600 hover:text-primary-600 flex items-center gap-[8px]">
              <Link className="flex items-center gap-[8px]" href='/categories'>
                <Image className="w-[25px]" src={meats} alt=""/>
                <span>Meats & Fish</span>
              </Link>
            </li>
            <li
              className="p-3 border-b border-gray-100 text-gray-600 hover:text-primary-600 flex items-center gap-[8px]">
              <Link className="flex items-center gap-[8px]" href='/categories'>
                <Image className="w-[25px]" src={breads} alt=""/>
                <span>Breads & Bakery</span>
              </Link>
            </li>
            <li
              className="p-3 border-b border-gray-100 text-gray-600 hover:text-primary-600 flex items-center gap-[8px]">
              <Link className="flex items-center gap-[8px]" href='/categories'>
                <Image className="w-[25px]" src={frozen} alt=""/>
                <span>Frozen Foods</span>
              </Link>
            </li>
            <li
              className="p-3 border-b border-gray-100 text-gray-600 hover:text-primary-600 flex items-center gap-[8px]">
              <Link className="flex items-center gap-[8px]" href='/categories'>
                <Image className="w-[25px]" src={breakfast} alt=""/>
                <span>Breakfast & Dairy</span>
              </Link>
            </li>
            <li
              className="p-3 border-b border-gray-100 text-gray-600 hover:text-primary-600 flex items-center gap-[8px]">
              <Link className="flex items-center gap-[8px]" href='/categories'>
                <Image className="w-[25px]" src={biscuits} alt=""/>
                <span>Biscuits & Snacks</span>
              </Link>
            </li>
            <li
              className="p-3 border-b border-gray-100 text-gray-600 hover:text-primary-600 flex items-center gap-[8px]">
              <Link className="flex items-center gap-[8px]" href='/categories'>
                <Image className="w-[25px]" src={beverages} alt=""/>
                <span>Beverages</span>
              </Link>
            </li>
            <li
              className="p-3 border-b border-gray-100 text-gray-600 hover:text-primary-600 flex items-center gap-[8px]">
              <Link className="flex items-center gap-[8px]" href='/categories'>
                <Image className="w-[25px]" src={grocery} alt=""/>
                <span>Grocery</span>
              </Link>
            </li>
          </div>
        </div>
        <li className="txtHover active font-medium pl-0  md:pl-12">
          <Link href="/">Home</Link>
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

export default MenuBar;

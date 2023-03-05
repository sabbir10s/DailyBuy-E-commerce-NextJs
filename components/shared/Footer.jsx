import React from "react";
import logo from "../../assets/logo/big_logo.png";
import payment from "../../assets/icon/payment.png";
import contactIcon from "../../assets/icon/contact_icon.png";
import social1 from "../../assets/icon/social_icon (1).png";
import social2 from "../../assets/icon/social_icon (2).png";
import social3 from "../../assets/icon/social_icon (3).png";
import social4 from "../../assets/icon/social_icon (4).png";
import styles from"../../styles/footer.module.css";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={`border-t border-gray-100 footer ${styles.footer}`}>
      <div className=" my-16  container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-3">
          <Link href="/">
            <div className="cursor-pointer w-[200px] h-14">
              <Image src={logo} className="w-full h-full" alt="" />
            </div>
          </Link>
          <p className="p-3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex items-center space-x-2 px-3">
            <Image src={social3} className="cursor-pointer" alt="" />
            <Image src={social2} className="cursor-pointer" alt="" />
            <Image src={social4} className="cursor-pointer" alt="" />
            <Image src={social1} className="cursor-pointer" alt="" />
          </div>
        </div>
        <div className="">
          <h2 className="text-2xl font-semibold mt-3 mb-5">QUICK LINKS</h2>
          <ul className="space-y-4 p-3">
            <li className="txtHover">Home</li>
            <li className="txtHover">Products</li>
            <li className="txtHover">Blog</li>
            <li className="txtHover">About us</li>
            <li className="txtHover">Contact us</li>
          </ul>
        </div>{" "}
        <div className="">
          <h2 className="text-2xl font-semibold mt-3 mb-5">CUSTOMER AREA</h2>
          <ul className="space-y-4 p-3">
            <li className="txtHover">My Account</li>
            <li className="txtHover">Order</li>
            <li className="txtHover">Terms</li>
            <li className="txtHover">Privacy Policy</li>
            <li className="txtHover">Shipping Information</li>
          </ul>
        </div>{" "}
        <div className="">
          <h2 className="text-2xl font-semibold mt-3 mb-5">CONTACT</h2>
          <p className="p-3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="p-3 flex space-x-3 items-center">
            <Image src={contactIcon} alt="" />
            <div>
              <p className="text-black font-medium">Have any question?</p>
              <p className="text-primary-600 font-bold text-3xl">099 456 789</p>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="flex flex-col lg:flex-row justify-between items-center container py-2">
        <p className="text-gray-500">DailyBuy - © 2023 All Rights Reserved</p>
        <div className="flex items-center my-2 lg:my-0">
          <p className="text-primary-600 hidden lg:block font-semibold">Pay With</p> <Image src={payment} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
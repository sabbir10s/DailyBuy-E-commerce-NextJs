import Link from "next/link";
import React from "react";

const NavTop = () => {
    return (
        <div className="hidden bg-white lg:block">
            <div className="container py-2 ">
                <div className="flex justify-between items-center">
                    <ul className="flex items-center text-xs">
                        <li className="txtHover border-r pr-3">
                            <Link href="/orderTrack">
                                <span>Order Tracking</span>
                            </Link>
                        </li>
                        <li className="txtHover pl-3">
                            <Link href="/profile">
                                <span>My account</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="flex items-center gap-1 text-xs">
                        <p>Summer sale discount off <span className="text-secondary-600">50%</span>!</p>
                        <Link className="hover:text-primary-600 duration-300" href='/categories'>Shop Now</Link>
                    </div>
                    <ul className="flex items-center text-xs">
                        <li className="txtHover border-r pr-3">
                            <Link href="/faq">
                                <span>FAQ</span>
                            </Link>
                        </li>
                        <li className="pl-3">
                            <span className="mr-1">Need help? Call Us:</span>
                            <span className="text-primary-600">+ 1400 800</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavTop;

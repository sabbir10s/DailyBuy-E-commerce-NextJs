import React, {useState} from 'react';
import { RiHeartLine, RiUser3Line} from 'react-icons/ri';
import AuthenticationModal from '../AuthenticationModal';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = ({visible, handleCloseSidebar}) => {
    const router = useRouter()
    const [showModal,
        setShowModal] = useState(false);
    const handleOnClose = () => {
        setShowModal(false);
    };
    const handleCloseModal = (e)=>{
            if(e.target.id === 'container') handleCloseSidebar()
    }

    if (!visible) {
        return null
    }
   
    
    return (
        <div
            id='container'
            onClick={handleCloseModal}
            className='lg:hidden z-50 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-start'>
            <div className='relative w-2/4'>
                <div className='bg-white w-full h-screen p-[12px] md:p-6'>
                    <div className=' w-full flex justify-between'>
                        <div className='flex items-center gap-6 md:gap-8'>
                            <button className="" onClick={() => setShowModal(true)}>
                                <RiUser3Line className="text-[20px] hover:text-black duration-300"/>
                            </button>{" "}
                            <Link onClick={handleCloseSidebar} className="" href='/wishlist'>
                                <button className="relative flex items-center" type="button">
                                    <RiHeartLine className="text-[20px] hover:text-black duration-300"/>
                                    <span
                                        className="absolute top-[-10px] left-[18px] text-[14px] font-semibold text-secondary-600">
                                        {0}
                                    </span>
                                </button>
                            </Link>
                        </div>
                        <button
                            className='bg-secondary-500 text-white w-6 md:w-8 h-6 md:h-8 rounded-full text-sm'
                            onClick={handleCloseSidebar}>X</button>
                    </div>
                    <ul className="flex flex-col items-start gap-6 pt-6 text-black text-sm lg:text-base">
                        <li onClick={handleCloseSidebar} className="txtHover font-medium">
                        <Link  className={router.pathname == "/" ? "text-primary-600" : "text-gray-700"} href="/">Home</Link>
                        </li>
                        <li onClick={handleCloseSidebar} className="txtHover font-medium">
                        <Link className={router.pathname == "/categories" ? "text-primary-600" : "text-gray-700"} href="/categories">Shop</Link>
                        </li>
                        <li onClick={handleCloseSidebar} className="txtHover font-medium">
                        {" "}
                        <Link className={router.pathname == "/blog" ? "text-primary-600" : "text-gray-700"} href="/blog">Blog</Link>
                        </li>
                        <li onClick={handleCloseSidebar} className="txtHover font-medium">
                        {" "}
                        <Link className={router.pathname == "/about" ? "text-primary-600" : "text-gray-700"} href="/about">About us</Link>
                        </li>
                        <li onClick={handleCloseSidebar} className="txtHover font-medium">
                        {" "}
                        <Link className={router.pathname == "/contact" ? "text-primary-600" : "text-gray-700"} href="/contact">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <AuthenticationModal onClose={handleOnClose} visible={showModal}/>
        </div>
    );
};

export default Sidebar;
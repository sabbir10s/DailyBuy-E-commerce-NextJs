import { useRouter } from 'next/router';
import React from 'react'

const ActiveLink = ({ path, children }) => {
    const router = useRouter();
    console.log(router.asPath);
    const className = router.asPath === `/${path}` ? "text-primary-600" : 'text-gray-700 hover:text-primary-600 duration-300';
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default ActiveLink
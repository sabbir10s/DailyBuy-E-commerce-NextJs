import React from 'react';
import ProcessingSteps from '../components/screen/ProcessingSteps';
import YourWishlist from '../components/screen/YourWishlist';

const wishlist = () => {
    return (
        <div>
            <YourWishlist/>
            <ProcessingSteps />
        </div>
    );
};

export default wishlist;
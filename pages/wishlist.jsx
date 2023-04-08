import React from 'react';
import ProcessingSteps from '../components/screen/ProcessingSteps';
import YourWishlist from '../components/screen/YourWishlist';
import { Helmet } from 'react-helmet';

const wishlist = () => {
    return (
        <div>
              <Helmet>
                <title>DailyBuy - Wishlist</title>
                <meta charSet="utf-8" name="description" content="DailyBuy FAQ Page"/>
            </Helmet>
            <YourWishlist/>
            <ProcessingSteps />
        </div>
    );
};

export default wishlist;
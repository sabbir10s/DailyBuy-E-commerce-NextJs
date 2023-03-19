import FaqComponents from '@/components/screen/FAQ/FaqComponents';
import React from 'react';
import { Helmet } from 'react-helmet';

const faq = () => {
    return (
        <div>
             <Helmet>
                <title>DailyBuy - FAQ</title>
                <meta charSet="utf-8" name="description" content="DailyBuy FAQ Page"/>
            </Helmet>
            <FaqComponents/>
        </div>
    );
};

export default faq;
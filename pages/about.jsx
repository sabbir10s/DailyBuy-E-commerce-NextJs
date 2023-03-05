import AboutUs from '@/components/screen/AboutUs';

import React from 'react';
import { Helmet } from 'react-helmet';

const about = () => {
  return (
    <div>
      <Helmet>
        <title>DailyBuy - About</title>
        <meta charSet="utf-8" name="description" content="DailyBuy About Page"/>
      </Helmet>
      <AboutUs/>
    </div>
  );
};

export default about;
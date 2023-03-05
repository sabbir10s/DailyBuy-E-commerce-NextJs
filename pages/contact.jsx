import React from 'react';
import { Helmet } from 'react-helmet';
import Contact from '../components/screen/Contact';

const contact = () => {
  return (
    <div>
      <Helmet>
        <title>DailyBuy - Contact Us</title>
        <meta charSet="utf-8" name="description" content="DailyBuy Blog Page"/>
      </Helmet>
      <Contact/>
    </div>
  );
};

export default contact;
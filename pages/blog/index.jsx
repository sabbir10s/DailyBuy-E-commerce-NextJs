import Blogs from "@/components/screen/Blog/Blogs";
import ProcessingSteps from "@/components/screen/ProcessingSteps";

import React from "react";
import { Helmet } from "react-helmet";


const blog = () => {

  return (
    <>
      <Helmet>
        <title>DailyBuy - Blog</title>
        <meta charSet="utf-8" name="description" content="DailyBuy Blog Page" />
      </Helmet>
      <Blogs />
      <ProcessingSteps />
    </>
  );
};
export default blog;
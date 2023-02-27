import Blogs from "@/components/screen/Blog/Blogs";
import ProcessingSteps from "@/components/screen/ProcessingSteps";
import MenuBar from "@/components/shared/MenuBar";
import React from "react";


const blog = () => {
  return (
    <>
      <MenuBar />
      <Blogs />
      <ProcessingSteps />
    </>
  );
};
export default blog;
import React from "react";
import Slider from "react-slick";
import small4 from "../../assets/product-details/cup/small_product (4).png";
import Image from "next/image";
const SmallProductImg = ({ setActiveImg, small_img_url }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
  };
  return (
    <div>
      <Slider {...settings}>
        {small_img_url.map((img_url, index) => (
         <div key={index} className=" px-2 border-r border-gray-100">
         <Image onClick={() => setActiveImg(img_url)} className="w-full h-full object-center object-fill rounded-2xl" width={100} height={100} src={img_url} alt="" />
       </div>
        ))}
        <div className=" px-2">
          <Image onClick={() => setActiveImg(small4)} className="w-full h-full object-center object-fill rounded-2xl" width={100} height={100} src={small4} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SmallProductImg;

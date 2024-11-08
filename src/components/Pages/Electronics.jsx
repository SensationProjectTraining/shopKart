import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const eleContant = [
  { id: 1, img: "/Images/headphone.jpg", title: "Headphone", prize: "$29.99" },
  { id: 2, img: "/Images/graphic card.jpg", title: "Graphic Card", prize: "$99.99" },
  { id: 3, img: "/Images/gear.jpg", title: "Gaming Gear", prize: "$119.99" },
  { id: 4, img: "/Images/glasses.jpg", title: "Sunglasses", prize: "$19.99" },
  { id: 5, img: "/Images/handbag.jpg", title: "Bag", prize: "$229.99" },
  { id: 6, img: "/Images/gold.jpg", title: "Gold plate Accessories", prize: "$529.99" },
];

export const Electronics = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">
      <div className="text-center">
        <h1 className=" title text-3xl font-light mb-10">
          Accessories/Electronics
        </h1>
        <p className="text-black/75 capitalize md:w-2/3 mx-auto mb-8 mt-10 ">
          A website for accessories and electronic devices offers a wide range
          of products such as phone cases, chargers, headphones, and tech
          gadgets. It serves as an online marketplace where customers can
          browse, compare, and purchase electronics and related accessories. The
          site typically includes product details, reviews, and secure payment
          options for a seamless shopping experience.
        </p>
      </div>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {eleContant.map(({ id, img, title, prize }) => (
            <SwiperSlide key={id}>
              <div className="relative">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-64 md:h-80 object-contain rounded-lg "
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-300  to-transparent p-4">
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="font-semibold text-xl">{prize}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Electronics;

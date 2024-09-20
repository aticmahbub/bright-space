import {  useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const FeaturedBlogger = () => {
  const [setSwiperRef] = useState(null);
  const [bloggers, setBlogger] = useState([]);

  useEffect(() => {
    fetch('/featuredBlogger.json')
      .then((res) => {return res.json();})
      .then((data) => setBlogger(data))
      .catch((error) => console.error('Error fetching the data:', error)); 
  }, []);

  

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={20}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          // For small devices (<640px)
          640: {
            slidesPerView: 1,
            centeredSlides: true,  // 
            spaceBetween: 20,
          },
         
          641: {
            slidesPerView: 4,  
            centeredSlides: false,
            spaceBetween: 30, 
          },
        }}
        className="mySwiper px-10"
      >

        {
          bloggers.map(blogger => <SwiperSlide key={blogger.id}>
            <div className="px-5 py-4 ">
              <div className="flex  items-center gap-5">
                <img
                  alt=""
                  className="w-12 h-12 rounded-full ring-4"
                  src="https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div>
                  <p className="text-black font-semibold">
                    {blogger.name}</p>
                  <p className="text-gray-400">
                    {blogger.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>)
        }
       
       
        
        
        
      </Swiper>
    </>
  );
};

export default FeaturedBlogger;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useState } from "react";

const FeaturedBlogger = ({ blogs }) => {
  const [setSwiperRef] = useState(null);

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
          640: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 20,
          },
          641: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 30,
          },
        }}
        className="mySwiper px-10"
      >
        {blogs?.map((blogger) => (
          <SwiperSlide key={blogger._id}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-lg p-5 flex items-center gap-5 w-[241px] lg:w-[320px] h-24">
                <img
                  alt="Blogger"
                  className="w-12 h-12 rounded-full ring-4 object-cover"
                  src={blogger.authorProfile}
                />
                <div>
                  <p className="text-black font-semibold">{blogger.authorName}</p>
                  <p className="text-gray-400">{blogger.authorPassion}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FeaturedBlogger;

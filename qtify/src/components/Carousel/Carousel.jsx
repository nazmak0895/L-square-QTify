import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
// import styles from "./Carousel.module.css";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

export default function Carousel({ data, renderItem }) {
  const swiperRef = useRef(null);

  return (
    <div style={{ position: "relative" }}>
      <LeftArrow onClick={() => swiperRef.current.slidePrev()} />
      <RightArrow onClick={() => swiperRef.current.slideNext()} />

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={7}
        breakpoints={{
          0: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 7 }
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
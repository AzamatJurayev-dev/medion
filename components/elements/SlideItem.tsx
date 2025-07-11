import { SwiperSlide } from "swiper/react";

interface SlideItemProps {
  children: React.ReactNode;
  keyProp?: string | number;
}

const SlideItem = ({ children, keyProp }: SlideItemProps) => {
  return <SwiperSlide key={keyProp}>{children}</SwiperSlide>;
};

export default SlideItem;

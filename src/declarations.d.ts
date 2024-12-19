declare module "bear-react-carousel" {
  import React from "react";
  export const BearSlideImage: React.FC<{ imageUrl: string }>;
  export const BearCarousel: React.FC<{
    data: React.ReactNode[];
    slidesPerView?: number;
    slidesPerGroup?: number;
    isEnableNavButton?: boolean;
    isEnableLoop?: boolean;
    autoPlayTime?: number;
    isEnableAutoPlay?: boolean;
    breakpoints?: Record<number, { slidesPerView: number }>;
  }>;
}

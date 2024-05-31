"use client";

import "swiper/css";
import "swiper/css/navigation";

import { useMediaQuery } from "@react-hook/media-query";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { A11y, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { FavoriteCard } from "@/components/favorite-card";
import { Favorite } from "@/types/favorite";
import { getCurrentLanguage, Lang } from "@/utils/language";

interface CarouselProps {
  data: Favorite[];
}

export function FavoriteCarousel({ data: favorites }: CarouselProps) {
  const [lang, setLang] = useState<Lang>("en");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const designFavorites = favorites.filter(
    (favorite) => favorite.resourceType === "Design",
  );
  const developmentFavorites = favorites.filter(
    (favorite) => favorite.resourceType === "Development",
  );

  useEffect(() => {
    setLang(getCurrentLanguage());
  }, []);

  const swiperParams = {
    modules: [Navigation, Scrollbar, A11y],
    spaceBetween: 10,
    centeredSlides: isMobile ? true : false,
    navigation: true,
    slidesPerView: isMobile ? 2 : 3,
    loop: true,
    breakpoints: {
      2048: {
        slidesPerView: 5,
      },
      1769: {
        slidesPerView: 4,
      },
      1350: {
        slidesPerView: 3,
      },
      1113: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      650: {
        slidesPerView: 2,
      },
      280: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <>
      {designFavorites.length > 0 && (
        <div className="mt-4 flex flex-col gap-10">
          {lang === "en" ? (
            <h2 className="mb-2 text-xl font-semibold">Design Resources</h2>
          ) : (
            <h2 className="mb-2 text-xl font-semibold">Recursos de Design</h2>
          )}
          <div className="relative mb-4 w-full">
            <Swiper
              {...swiperParams}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              scrollbar={{ draggable: true }}
              className="flex w-full items-center justify-center"
            >
              {designFavorites.map((favorite, index) => (
                <SwiperSlide key={index}>
                  <FavoriteCard
                    src={favorite.image}
                    description={favorite.description}
                    title={favorite.title}
                    link={favorite.url}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-foreground/90 p-2 shadow-lg lg:-left-12">
              <ChevronLeft className="text-blue-500" />
            </div>
            <div className="custom-next absolute right-0 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-foreground/90 p-2 shadow-lg lg:-right-12">
              <ChevronRight className="text-blue-500" />
            </div>
          </div>
        </div>
      )}
      {developmentFavorites.length > 0 && (
        <div className="mt-4 flex flex-col gap-10 ">
          {lang === "en" ? (
            <h2 className="mb-2 text-xl font-semibold">GitHub Repositories</h2>
          ) : (
            <h2 className="mb-2 text-xl font-semibold">Repositório GitHub</h2>
          )}
          <div className="relative mb-4 w-full">
            <Swiper
              {...swiperParams}
              navigation={{
                nextEl: ".custom-next-dev",
                prevEl: ".custom-prev-dev",
              }}
              scrollbar={{ draggable: true }}
              className="flex w-full items-center justify-center"
            >
              {developmentFavorites.map((favorite, index) => (
                <SwiperSlide key={index}>
                  <FavoriteCard
                    src={favorite.image}
                    description={favorite.description}
                    title={favorite.title}
                    link={favorite.url}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-prev-dev absolute left-0 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-foreground/90 p-2 shadow-lg lg:-left-12">
              <ChevronLeft className="text-blue-500" />
            </div>
            <div className="custom-next-dev absolute right-0 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-foreground/90 p-2 shadow-lg lg:-right-12">
              <ChevronRight className="text-blue-500" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

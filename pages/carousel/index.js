"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";

export default function AutoCarousel() {
  const slides = [
    {
      img: "/assets/Baldur's Gate.png",
      title: "Baldur's Gate 3",
      description: "An epic RPG adventure set in the Forgotten Realms.",
      price: "$59.99",
    },
    {
      img: "/assets/DMC 5.png",
      title: "Devil May Cry 5",
      description: "Fast-paced hack and slash action with stunning visuals.",
      price: "$39.99",
    },
    {
      img: "/assets/Elden Ring.png",
      title: "Elden Ring",
      description: "Explore a vast open world crafted by FromSoftware.",
      price: "$69.99",
    },
    {
      img: "/assets/Hogwarts Legacy.png",
      title: "Hogwarts Legacy",
      description: "Live your wizarding dream in the Harry Potter universe.",
      price: "$49.99",
    },
    {
      img: "/assets/Cyberpunk 2077.png",
      title: "Cyberpunk 2077",
      description: "An open-world action role-playing game set in the dystopian metropolis of Night City.",
      price: "$54.99",
    },
  ];

  return (
    <div className="relative w-3/4 mx-auto px-12"> {/* 👈 wrapper with relative */}
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={true}
        loop={true}
        className="h-64 sm:h-96 rounded-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col sm:flex-row items-center justify-center h-full gap-6 p-4">
              {/* Image */}
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full sm:w-1/2 h-full object-cover rounded-lg"
              />

              {/* Text */}
              <div className="sm:w-1/2 text-center sm:text-left">
                <Link href=""><h2 className="text-xl font-bold mb-2">{slide.title}</h2></Link>
                <p className="text-gray-600 mb-2">{slide.description}</p>
                <span className="text-lg font-semibold text-green-600">
                  {slide.price}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
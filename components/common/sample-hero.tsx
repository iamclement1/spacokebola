
'use client'
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";
import { Button } from "../ui/button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData } from "@/lib/data";
import Image from "next/image";
const SampleHero = () => {
   const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
   };
   return (
      <Slider
         {...settings}>
         {carouselData.map((item) => (
            <div key={item.id} >
               <div className="relative">
                  {/* Add the video element here */}
                  <video
                     autoPlay
                     muted
                     loop
                     playsInline
                     className="w-full h-full object-cover"
                  >
                     <source src={item.videoPath} type="video/mp4" />
                  </video>

                  {/* Add a black overlay with text */}
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center 
                        text-white animate-fade-in uppercase sm:mt-0 sm:pt-0 pt-12">
                     <Fade
                        direction="up"
                        duration={1000}
                        cascade>
                        <p className='sm:text-md text-xs'>{item.welcomeText}</p>
                        <h2 className="sm:text-4xl text-sm font-bold mb-2 w-full mx-auto text-center sm:py-3 py-1">{item.text}</h2>
                        <Button variant="secondary" size={"lg"}>{item.buttonText}</Button>
                     </Fade>

                  </div>
               </div>
            </div>
         ))}
      </Slider>
   );
}

export default SampleHero
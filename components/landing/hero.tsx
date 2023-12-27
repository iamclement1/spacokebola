'use client';
import { Button } from '../ui/button';
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious
} from '../ui/carousel';
import { Fade } from 'react-awesome-reveal';


const Hero = () => {
   return (
      <div className='z-0 sm:mt-0 mt-12'>
         <Carousel opts={{
            align: "start",
            loop: true,
         }}>
            <CarouselContent>
               {carouselData.map((item) => (
                  <CarouselItem key={item.id} >
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
                        text-white animate-fade-in uppercase sm:mt-0 mt-4">
                           <Fade
                              direction="up"
                              duration={1000}
                              cascade>
                              <p className='text-md '>{item.welcomeText}</p>
                              <h2 className="sm:text-4xl text-md font-bold mb-2 w-full mx-auto text-center sm:py-3 py-1">{item.text}</h2>
                              <Button variant="secondary" size={"lg"}>{item.buttonText}</Button>
                           </Fade>

                        </div>
                     </div>
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious className="z-50" />
            <CarouselNext className="z-50" />
         </Carousel>
      </div>
   );
};

export default Hero;




// Sample data for carousel items
const carouselData = [
   {
      id: 1,
      videoPath: '/video/curate_carousel.mp4',
      welcomeText: "Welcome To",
      text: "St Pauls' Anglican Church, Ibadan",
      buttonText: 'Visit Us',
   },
   {
      id: 2,
      videoPath: '/video/spac_carousel1.mp4',
      text: 'Overlay Text 2',
      buttonText: 'Book a Session',
   },
   // Add more items as needed
];
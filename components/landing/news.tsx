'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import Container from '../ui/container';

const News = () => {

   const eventData = [
      { text: "Event 1 description", imageUrl: "/img/event.jpeg" },
      { text: "Event 2 description", imageUrl: "/img/event.jpeg" },
      { text: "Event 3 description", imageUrl: "/img/event.jpeg" },
      { text: "Event 4 description", imageUrl: "/img/event.jpeg" },
      { text: "Event 5 description", imageUrl: "/img/event.jpeg" },
   ];

   return (
      <Container>
         <main>
            <h1 className='font-bold sm:text-2xl'>
               Upcoming Events
            </h1>

            <Carousel
               opts={{
                  align: "start",
               }}
               className="w-full max-w-lg"
            >
               <CarouselContent>
                  {eventData.map((event, index) => (
                     <CarouselItem key={event.text} className="flex items-center justify-center h-full">
                        <div className="p-4">
                           <Card>
                              <CardContent className="flex flex-col items-center justify-center">
                                 <Image
                                    src={event.imageUrl}
                                    alt={`Event ${index + 1}`}
                                    width={500}
                                    height={500}
                                 />
                              </CardContent>
                              <CardFooter>
                                 <p className="mt-4 text-center">{event.text}</p>
                              </CardFooter>
                           </Card>
                        </div>
                     </CarouselItem>
                  ))}
               </CarouselContent>
               <CarouselPrevious />
               <CarouselNext />
            </Carousel>

         </main>
      </Container>
   );
}

export default News;

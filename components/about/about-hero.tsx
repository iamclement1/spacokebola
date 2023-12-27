'use client';
import React from 'react'
import Container from '../ui/container'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

const AboutHero = () => {
   return (
      <Container>
         <section className='sm:my-24 grid sm:grid-cols-2 gap-8 items-center sm:px-0 px-4'>
            <Fade direction='up' cascade>
               <div>
                  <h1 className='font-bold sm:text-2xl text-sm sm:w-7/12 opacity-80'>
                     Welcome to St Paul's Anglican Church, Oke Bola.
                  </h1>
                  <p className='sm:my-4 my-2 sm:w-9/12 opacity-50'>
                     Whether you are new in Ibadan or have been in Ibadan for a while and are looking for a new place to worship, please know that we will be more than glad to welcome you into our midst.
                  </p>
               </div>
               <div className='rounded-lg shadow-2xl'>
                  <Image
                     src={"/img/spac.jpeg"}
                     alt='church building'
                     width={1000}
                     height={500}
                     priority
                     className='rounded-2xl'
                  />
               </div>
            </Fade>
         </section>
      </Container>
   )
}

export default AboutHero



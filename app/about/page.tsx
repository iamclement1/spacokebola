
import AboutHero from '@/components/about/about-hero'
import { Button } from '@/components/ui/button'
import Container from '@/components/ui/container'
import Link from 'next/link'
import React from 'react'

const page = () => {
   return (
      <Container>
         <div className='sm:mt-28 mt-24'>
            <Link href={"/"}>
               <Button
                  variant="ghost"
                  className='font-semibold '>{"Home >"} </Button>
            </Link>
            <Link href={"/about"}>
               <Button
                  variant="ghost"
                  className='opacity-50 font-medium'>About</Button>
            </Link>
            <AboutHero />
         </div>
      </Container>
   )
}

export default page
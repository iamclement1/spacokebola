'use client';

import Link from "next/link"
import Container from "../ui/container"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { routes } from "@/lib/data";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";


const Header = () => {
   const [scrolled, setScrolled] = useState(false);
   const [scrollThreshold, setScrollThreshold] = useState(0);

   // Ref to store the hero element height
   const heroRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      const handleScroll = () => {
         const scrollY = window.scrollY;

         if (scrollY > scrollThreshold) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }
      };

      // Calculate scroll threshold based on hero element height
      const updateScrollThreshold = () => {
         // Use optional chaining to guard against null value
         const heroHeight = heroRef.current?.clientHeight;

         if (heroHeight !== undefined) {
            const newScrollThreshold = heroHeight / 2; // You can adjust the divisor as needed
            setScrollThreshold(newScrollThreshold);
         }
      };


      // Initial calculation
      updateScrollThreshold();

      // Event listeners
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', updateScrollThreshold);

      // Cleanup
      return () => {
         window.removeEventListener('scroll', handleScroll);
         window.removeEventListener('resize', updateScrollThreshold);
      };
   }, [scrollThreshold]);

   const pathname = usePathname()


   return (
      <header className={`fixed top-0 z-50 w-full ${pathname === '/' && !scrolled ? 'bg-transparent text-white' : 'bg-white text-black'} py-3 px-4`}>

         <Container>
            <div className="relative flex h-16 items-center justify-between" ref={heroRef}>
               <div className="flex items-center">
                  <Link href={"/"}>
                     <Image
                        src="/img/SPAC-LOGO.png"
                        alt="Vercel Logo"
                        className="dark:invert"
                        width={50}
                        height={14}
                        priority
                     />
                  </Link>
               </div>
               <nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden md:block uppercase">
                  {routes.map((route) => (
                     <Button key={route.label} asChild variant={"ghost"}>
                        <Link href={route.href} className="text-sm font-medium transition-colors ">
                           {route.label}
                        </Link>
                     </Button>
                  ))}
               </nav>
               <div className="flex items-center">
                  <Sheet>
                     <SheetTrigger>
                        <CiMenuFries className="h-6 md:hidden w-6" />
                     </SheetTrigger>
                     <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col gap-4">
                           {routes.map((route) => (
                              <Link
                                 key={route.label}
                                 href={route.href}
                                 className="block px-2 py-1 text-lg"
                              >
                                 {route.label}
                              </Link>
                           ))}
                        </nav>
                     </SheetContent>
                  </Sheet>
               </div>
            </div>
         </Container>
      </header>
   )
}

export default Header

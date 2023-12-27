"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { routes } from "@/lib/data";
import Container from "../ui/container";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";


const Navbar = () => {
   return (
      <nav className="sm:flex sm:justify-between uppercase fixed top-0 left-0 right-0 z-50 bg-white">
         <Container>
            <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
               <div className="flex items-center">
                  <Link href="/" className="">
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
               <nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden md:block">
                  {routes.map((route) => (
                     <Button asChild variant="ghost"
                        key={route.label}
                     >
                        <Link
                           href={route.href}
                           className="text-sm font-medium transition-colors"
                        >
                           {route.label}
                        </Link>
                     </Button>
                  ))}
               </nav>
               <div className="flex items-center h-6 md:hidden w-6">
                  <Sheet>
                     <SheetTrigger>
                        <CiMenuFries lassName="h-6 md:hidden w-6" />
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
      </nav>
   );
};

export default Navbar;
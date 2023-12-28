import React from 'react'
import { Facebook, Instagram } from './icons'
import Container from '../ui/container'

// bg - [#e1aa1e] / 80
const Footer = () => {
   return (
      <main className='flex flex-col bg-[#f5750a]/75 text-white rounded-tl-xl rounded-tr-xl mt-3 pt-8'>
         <Container>
            <section className='grid sm:grid-cols-3'>
               <div>
                  <div className='flex flex-col justify-center'>
                     <h1 className='font-bold text-xl'>
                        {"St Paul's Anglican Church"}
                     </h1>
                     <span className='text-sm '>{"(The Action Place of the Holy Spirit)"}</span>
                     <span className='text-xs'>7 Koyejo Street, Oke Bola, Ibadan.</span>

                  </div>
               </div>
               <div>
                  <h1 className='text-xl font-bold'>Quick Links</h1>
                  <ul className='text-sm'>
                     <li>About Us</li>
                     <li>Contact Us</li>
                  </ul>
               </div>
            </section>
            {/* copyright section */}
         </Container>
         <div className=' bg-[#f5750a] mt-3 '>
            <Container>
               <main className='sm:flex bg-[#f5750a] justify-between items-center py-3 pb-3' >
                  <div className=" flex justify-center items-center gap-6">
                     <h1>Connect with us</h1>
                     <div className='grid grid-cols-2 gap-4'>
                        <Facebook />
                        <Instagram />
                     </div>
                  </div>
                  <span className='text-xs'>Copyright &copy; 2023 SPAC OKE BOLA -  All Rights Reserved </span>
               </main>
            </Container>
         </div>

      </main>
   )
}

export default Footer
"use client";
import React from 'react'
import Sidebar from '@/components/dashboard/sidebar'
import Header from '@/components/dashboard/header'
import { FileArchive, KeyRound, Ticket, Package,Video, Store } from 'lucide-react'
import MobileNavbar from '@/components/dashboard/mobileNavbar';

const Shop = () => {
  return (
    <div className='flex'>
      <Sidebar />

      <main className='md:w-[80vw] w-[100vw] bg-[#DAE7EF] h-[100vh] flex flex-col items-center justify-center gap-7 overflow-auto md:pb-10 pb-20'>
        <Header />
        <MobileNavbar />

        <section className="w-[90%] md:w-[65%] flex flex-col gap-7 md:mt-[13rem] mt-[57rem]">
        <h2 className="text-2xl font-semibold md:text-left text-center">Shop</h2>

          <div className="bg-[#f2f2f2] px-8 py-10 rounded-xl">

            <div className='flex flex-col items-center gap-2'>
                <h2 className='font-bold text-2xl'>Add a new listing</h2>
                <div className='text-secondaryTextColor text-lg md:text-left text-center'>Pick a template or start from scratch</div>
            </div>

            <div className='md:grid grid-cols-3 flex flex-col gap-3 w-full md:gap-5 mt-7 mb-4'>
                <div className='flex items-center gap-2 border-dotted border-2 border-[#5a5a5a] justify-center py-8 rounded-lg bg-[#22222208]'>+ Start from scratch</div>
                <div className='flex items-center gap-2 border-dotted border-2 border-[#aadaad] justify-center py-8 rounded-lg bg-[#e8f5e980]'><FileArchive /> Digital product</div>
                <div className='flex items-center gap-2 border-dotted border-2 border-[#fffabf] justify-center py-8 rounded-lg bg-[#fffde780]'><KeyRound />Instagram close <br /> friends access</div>
                <div className='flex items-center gap-2 border-dotted border-2 border-[#dbb1e1] justify-center py-10 rounded-lg bg-[#f3e5f580]'><Video />1-on-1 Zoom call</div>
                <div className='flex items-center gap-2 border-dotted border-2 border-[#c3c8e7] justify-center py-10 rounded-lg bg-[#e8eaf680]'><Ticket />Ticket for an event</div>
                <div className='flex items-center gap-2 border-dotted border-2 border-[#a9d7f9] justify-center py-10 rounded-lg bg-[#e3f2fd80]'><Package />Physically good</div>
            </div>

          </div>
          </section>

          <section className='bg-[#f2f2f2] shadow-sm md:w-[65%] w-[90%] rounded-lg py-14 text-center px-7 md:px-40 flex flex-col items-center justify-center gap-4'>
          <Store size={40} />
          <h4 className='font-semibold text-xl'>
            You haven't added anything yet.
          </h4>
          <p className='text-lg'>Shop is a simple and effective way to offer something to your audience. It could be anything. See some examples <a href="https://buymeacoffee.com/thefuelgirls/extras" className='underline'>here</a> and <a href="https://buymeacoffee.com/hamglass/extras" className='underline'>here.</a></p>
            </section>

      </main>
    </div>
  )
}

export default Shop

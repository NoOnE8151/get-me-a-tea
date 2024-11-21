import React from 'react'
import Sidebar from '@/components/dashboard/sidebar'
import Header from '@/components/dashboard/header'

const Message = () => {
  return (
    <div className='flex'>
      <Sidebar />

      <main className='w-[80vw] bg-[#DAE7EF] h-[100vh] flex flex-col items-center justify-center gap-7 overflow-auto pb-10'>
        <Header />

        <section className="w-[65%] flex flex-col gap-7 mt-[13rem]">
          <h2 className='text-2xl font-semibold'>Messages</h2>
        </section>
      </main>
    </div>
  )
}

export default Message

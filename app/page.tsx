import Page from '@/app/component/Header/Header'
import Link from 'next/link'
import React from 'react'
import Footer from './component/Footer/Footer'

const page = () => {
  return (
    <div className='bg-gray-800 h-screen'>
      <Page/>
      <div className='flex justify-center items-center sm:row-span-1 gap-5 h-[400px]'>
      <Link href={"/server-side"}><button className='bg-white border-[3px] text-[20px] text-blue-950 border-red-500 lg:border-green-500 md:border-yellow-500 text-2xl md:text-6xl lg:text-7xl hover:animate-bounce'>server-side</button></Link>
      <Link href={"/client-side"}><button className='bg-white border-[3px] text-[20px] text-blue-950 border-red-500 lg:border-green-500 md:border-yellow-500 text-2xl md:text-6xl lg:text-7xl hover:animate-bounce'>client-side</button></Link>
    </div> 
    <Footer/>
   </div>
  )
}

export default page

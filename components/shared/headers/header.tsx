import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return ( 
    <header className='w-full fixed h-16 bg-transparent backdrop-blur-3xl'>
        <div className=' flex  w-full h-full bg-white/5 border-white/10'>
            <div className='flex w-full justify-between'>
             <a href="/" className='flex  flex-col mx-10'>
               <div className='flex mx-4 '>
                <span className='bg-white w-6 h-6 rounded-full'></span>
               </div>
               <div className='flex gap-3'>
               <span className='bg-white w-6 h-6 rounded-full '></span>
               <span className='bg-white w-6 h-6 rounded-full'></span>
               </div>
             </a>
                <div className='flex h-full items-center mx-10'>
                    <Button>Login</Button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
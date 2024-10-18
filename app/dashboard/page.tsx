import MainLayout from '@/components/MainLayout'
import Banner from '@/components/shared/banner'
import { Input } from '@/components/ui/input'
import { Plus } from 'lucide-react'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex flex-col w-full h-screen '>
      <div className='flex h-14 w-full flex-col   py-3'>
       <Banner />
      </div>
      {/*  */}
      <div className='flex justify-between w-full mt-20'>
        <div className='flex flex-col'>
          <h1 className='font-semibold text-5xl'>Listin Now</h1>
          <p>
            Add your list items here. Click on the plus icon to add new items.
          </p>
        </div>
        <div className='bg-white/10 flex   lg:py-2 lg:px-4 w-20 items-center h-10 rounded-xl'>
         <Plus  className='mx-1' /> Add
        </div>
      </div>
      {/* Main LAyout */}
      <main>
        <MainLayout />
      </main>
    </div>
  )
}

export default Dashboard
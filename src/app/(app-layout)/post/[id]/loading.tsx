import { LoaderCircle } from 'lucide-react'
import React from 'react'

function loading() {
  return (
      <div className="w-full flex flex-col gap-2 p-[20px]">
        <div className='flex justify-center flex-col mb-12 mt-16 items-center gap-4'>
          <LoaderCircle className='stroke-primary animate-spin' />
          <h1 className='font-bold text-2xl max-w-[400px]'>Loading...</h1>
        </div>
      </div>
  )
}

export default loading
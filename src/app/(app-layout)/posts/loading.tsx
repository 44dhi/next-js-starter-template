import { Progress } from '@/components/ui/progress'
import React from 'react'

function loading() {
  return (
    <div className='w-full flex flex-col items-center justify-center p-24'>
      <h1 className='font-semibold'>Fetching Posts...</h1>
      <Progress value={70} className='w-[300px] mt-10' />
    </div>
  )
}

export default loading
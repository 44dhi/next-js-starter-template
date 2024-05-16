import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Computer } from 'lucide-react'
import React from 'react'

function loading() {
  return (
    <div className='flex h-full flex-col items-center gap-8 pt-16'>
      <div className='p-4 flex  items-center justify-center bg-card rounded-[10px]'>
        <Computer className='stroke-primary' />
      </div>
      <p className='font-semibold'>Loading Template...</p>
    </div>
  )
}

export default loading
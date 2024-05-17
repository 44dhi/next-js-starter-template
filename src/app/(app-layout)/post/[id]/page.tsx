import { Button } from '@/components/ui/button'
import { getPostForId } from '@/lib/APIRoutes'
import getQueryClient from '@/lib/getQueryClient'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { redirect, useParams } from 'next/navigation'
import React from 'react'

async function page({params}: {params: {id: string}}) {

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['post', 1],
    queryFn: () => getPostForId(params.id).then((res) => {
    return res.data;
    }).catch((err: any) => console.log(err)),
  })

  const res: any = queryClient.getQueryData(['post', 1])

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="w-full flex flex-col gap-2 p-[20px]">
        <div className='flex justify-between mb-12 mt-16 items-center gap-4'>
          <Link href={'/posts'}>
            <Button variant={'secondary'} size={'icon'}> <ChevronLeft /></Button>
          </Link>
          <h1 className='font-bold text-2xl max-w-[400px]'>Post</h1>
          <Button variant={'secondary'} size={'icon'} className='opacity-0'></Button>
        </div>
        <div className='container p-0'>
          <h1 className='font-bold text-2xl text-center'>{res.title}</h1>
          <p className='text-center mt-2'>{res.body}</p>
        </div>
      </div>
  </HydrationBoundary>
  )
}

export default page
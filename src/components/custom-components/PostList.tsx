'use client';

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { useQuery } from '@tanstack/react-query';

import { Skeleton } from '../ui/skeleton';
import { getAllPosts } from '@/lib/APIRoutes';
import { useAppDispatch } from '@/lib/reduxHooks';
import { getPosts } from '@/lib/features/postsSlice';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import {ChevronLeft} from 'lucide-react'


function PostList() {

  const dispatch = useAppDispatch()
  const router = useRouter()

  const { isLoading, isFetching, data } = useQuery({ queryKey: ['posts', 1],
  queryFn: () => getAllPosts().then((res) => {
    dispatch(getPosts(res.data))
    return res.data;
  }),
  })

  return (
    <div className="w-full flex flex-col gap-2 p-[20px]">
      <div className='flex justify-between mb-12 mt-16 items-center gap-4'>
        <Button variant={'secondary'} size={'icon'} onClick={() => router.back()}> <ChevronLeft /></Button>
        <h1 className='font-bold text-5xl'>Sample Posts</h1>
        <Button variant={'secondary'} size={'icon'} className='opacity-0'> <ChevronLeft /></Button>
      </div>
      {
        isLoading || isFetching
        ? <div className='columns-3 gap-3 '>
          {
            Array.from({length: 20}).map((key, index) => (
              <Card key={index} className='mb-4 break-inside-avoid-column'>
                <CardHeader>
                  <Skeleton className='w-[100%] h-[20px] bg-muted' />
                  <Skeleton className='w-[50%] h-[20px] bg-muted' />
                </CardHeader>
              <CardContent>
                {
                  Array.from({length: 2}).map((key, index) => (
                    <Skeleton key={index} className='w-[100%] h-[20px] bg-muted foo mt-3' />
                  ))
                }
              </CardContent>
            </Card>
            ))
          }
        </div>
        : <div className='columns-3 gap-3 '>
          {
            data?.map((key: any, index: number) => {
              return <Card key={index} className='mb-4 break-inside-avoid-column'>
                <CardHeader>
                  <CardTitle className='leading-7 text-2xl'>{key?.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-[#a9a9b5] text-ellipsis overflow-hidden line-clamp-3 font-semibold'>{key?.body}</p>
                </CardContent>
              </Card>
            })
          }
        </div>
      }
    </div>
  )
}

export default PostList
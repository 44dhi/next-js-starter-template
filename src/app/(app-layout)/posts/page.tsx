import PostList from '@/components/custom-components/PostList'
import { getAllPosts } from '@/lib/APIRoutes';
import getQueryClient from '@/lib/getQueryClient';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import React from 'react'

async function page() {

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['posts', 1],
    queryFn: () => getAllPosts().then((res) => {
    return res.data;
    }).catch((err) => console.log(err)),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostList />
    </HydrationBoundary>
  )
}

export default page
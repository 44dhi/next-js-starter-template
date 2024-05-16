"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppStore, makeStore } from "@/lib/store"
import { Provider } from "react-redux"

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 20000,
      },
    },
  })
}

function getQueryClient() {
  if (typeof window === 'undefined') {
    return makeQueryClient()
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}

let browserQueryClient: QueryClient | undefined = undefined

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const queryClient = getQueryClient()

  const storeRef = React.useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <NextThemesProvider {...props}>
    <QueryClientProvider client={queryClient}>
      <Provider store={storeRef.current}>
        {children}
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </NextThemesProvider>
}

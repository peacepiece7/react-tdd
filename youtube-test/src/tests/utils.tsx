import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { MemoryRouter, Routes } from 'react-router-dom'
import Youtube from '@/api/youtube'
import { YoutubeApiContext } from '../context/YoutubeApiContext'

export function withRouter(routes: ReactNode, initialEntry = '/') {
  return (
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  )
}

export function withAllContexts(children: ReactNode, youtube: Youtube) {
  const testClient = createTestQueryClient()
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      <QueryClientProvider client={testClient}>{children}</QueryClientProvider>
    </YoutubeApiContext.Provider>
  )
}

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })
}

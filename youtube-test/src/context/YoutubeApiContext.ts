import { createContext, useContext } from 'react'
import Youtube from '../api/youtube.ts'

export const YoutubeApiContext = createContext({ youtube: {} as Youtube })

export function useYoutubeApi() {
  return useContext(YoutubeApiContext)
}

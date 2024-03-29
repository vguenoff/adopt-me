import { useState, useEffect } from 'react'

import { ANIMALS, API_URL } from '@/lib/constants'

export type AnimalType = (typeof ANIMALS)[number] | ''

type LocalCache = Record<AnimalType, string[]> | Record<string, never>

const localCache: LocalCache = {}

export default function useBreedList(animal: AnimalType) {
  const [breedList, setBreedList] = useState<string[]>([])
  const [status, setStatus] = useState<'unloaded' | 'loading' | 'loaded'>('unloaded')

  useEffect(() => {
    async function requestBreadList() {
      setBreedList([])
      setStatus('loading')

      const res = await fetch(`${API_URL}/breeds?animal=${animal}`)
      const json = await res.json()

      localCache[animal] = json.breeds || []
      setBreedList(localCache[animal])
      setStatus('loaded')
    }

    if (!animal) {
      setBreedList([])
    } else if (localCache[animal]) {
      setBreedList(localCache[animal])
    } else {
      requestBreadList()
    }
  }, [animal])

  return [breedList, status] as const
}

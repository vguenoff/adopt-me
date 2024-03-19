import { useState, useEffect } from 'react'
import styles from './SearchParams.module.css'

import Pet from '@/components/Pet'

import useBreedList from '@/lib/hooks/useBreedList'

import type { PetProps } from '@/components/Pet'
import type { AnimalType as AnimalType } from '@/lib/hooks/useBreedList'

import { ANIMALS, API_URL } from '@/lib/constants'

export default function SearchParams() {
  const [location, setLocation] = useState('')
  const [animal, setAnimal] = useState<AnimalType>('')
  const [breed, setBreed] = useState('')
  const [pets, setPets] = useState([])
  const [breedList] = useBreedList(animal)

  useEffect(() => {
    requestPets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function requestPets() {
    const res = await fetch(`${API_URL}/pets?animal=${animal}&location=${location}&breed=${breed}`)
    const json = await res.json()

    setPets(json.pets)
  }

  return (
    <div className={styles.searchParams}>
      <form
        onSubmit={e => {
          e.preventDefault()
          setLocation('')
          setAnimal('')
          setBreed('')

          requestPets()
        }}
      >
        <label htmlFor="location">Location:</label>
        <input
          id="location"
          value={location}
          onChange={e => setLocation(e.target.value)}
          placeholder="Seattle, WA"
        />
        <label htmlFor="animal">Animal: </label>
        <select
          id="animal"
          value={animal}
          onChange={e => {
            setAnimal(e.target.value as AnimalType)
            setBreed('')
          }}
        >
          <option />
          {ANIMALS.map(animal => (
            <option key={animal}>{animal}</option>
          ))}
        </select>
        <label htmlFor="breed">Breed: </label>
        <select
          id="breed"
          value={breed}
          onChange={e => setBreed(e.target.value)}
          disabled={!breedList.length}
        >
          {breedList.map(breed => (
            <option key={breed}>{breed}</option>
          ))}
        </select>
        <button>Submit</button>
      </form>
      {pets.map(({ id, name, animal, breed }: { id: number } & PetProps) => (
        <Pet key={id} {...{ name, animal, breed }} />
      ))}
    </div>
  )
}

import { useState } from 'react'
import styles from './SearchParams.module.css'

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']
const BREEDS: string[] = []

export default function SearchParams() {
  const [location, setLocation] = useState('')
  const [animal, setAnimal] = useState('')
  const [breed, setBreed] = useState('')

  return (
    <div className={styles.searchParams}>
      <form>
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
            setAnimal(e.target.value)
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
          disabled={!BREEDS.length}
        >
          {BREEDS.map(breed => (
            <option key={breed}>{breed}</option>
          ))}
        </select>
        <button>Submit</button>
      </form>
    </div>
  )
}

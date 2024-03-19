import { useState } from 'react'
import styles from './SearchParams.module.css'

export default function SearchParams() {
  const [location, setLocation] = useState('')

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
        <button>Submit</button>
      </form>
    </div>
  )
}

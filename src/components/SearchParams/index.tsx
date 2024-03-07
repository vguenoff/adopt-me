import styles from './index.module.css'

export default function SearchParams() {
  const location = 'Seattle, WA'

  return (
    <div className={styles.searchParams}>
      <form>
        <label htmlFor="location">Location:</label>
        <input id="location" value={location} placeholder="Location" />
        <button>Submit</button>
      </form>
    </div>
  )
}

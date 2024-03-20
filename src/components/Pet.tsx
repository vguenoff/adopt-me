import styles from './Pet.module.css'

export type PetResponse = {
  animal: string
  breed: string
  city: string
  description: string
  id: number
  images: string[]
  name: string
  state: string
}

export type PetProps = Omit<PetResponse, 'description' | 'city' | 'state'> & {
  location: string
}

export default function Pet({ name, animal, breed, images, location, id }: PetProps) {
  const hero = images.length ? images[0] : 'https://pets-images.dev-apis.com/pets/none.jpg'

  return (
    <a href={`/details/${id}`} className={styles.pet}>
      <section>
        <img src={hero} alt={name} />
      </section>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </a>
  )
}

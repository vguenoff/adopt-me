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

export type PetProps = Omit<PetResponse, 'city' | 'state' | 'id'> & {
  location: string
}

export default function Pet({ name, animal, breed }: PetProps) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  )
}

type PetProps = {
  name: string
  animal: string
  breed: string
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

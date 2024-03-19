import Pet from '@/components/Pet'

import type { PetResponse } from '@/components/Pet'

export default function Results({ pets }: { pets: PetResponse[] }) {
  return (
    <>
      {!pets.length ? (
        <h1>No pets found.</h1>
      ) : (
        pets.map(({ id, name, animal, breed, images, description, city, state }) => (
          <Pet
            key={id}
            location={`${city}, ${state} `}
            {...{ name, animal, breed, images, description }}
          />
        ))
      )}
    </>
  )
}

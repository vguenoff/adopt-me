import { createElement } from 'react'

type PetProps = { name: string; animal: string; breed: string }

function Pet({ name, animal, breed }: PetProps) {
  return createElement('div', {}, [
    createElement('h1', {}, name),
    createElement('h2', {}, animal),
    createElement('h2', {}, breed),
  ])
}

export default function App() {
  return createElement('div', {}, [
    createElement('h1', {}, 'Adopt Me!'),
    createElement(Pet, { name: 'Lori', animal: 'Dog', breed: 'Mixed' }),
    createElement(Pet, { name: 'Tequila', animal: 'Dog', breed: 'Pitbull' }),
    createElement(Pet, { name: 'Lusi', animal: 'Dog', breed: 'Mixed' }),
  ])
}

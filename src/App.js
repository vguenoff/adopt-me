const { createElement } = React
const { createRoot } = ReactDOM

function Pet({ name, animal, breed }) {
  return createElement('div', {}, [
    createElement('h1', {}, name),
    createElement('h2', {}, animal),
    createElement('h2', {}, breed),
  ])
}

function App() {
  return createElement('div', {}, [
    createElement('h1', {}, 'Adopt Me!'),
    createElement(Pet, { name: 'Lori', animal: 'Dog', breed: 'Mixed' }),
    createElement(Pet, { name: 'Tequila', animal: 'Dog', breed: 'Pitbull' }),
    createElement(Pet, { name: 'Lusi', animal: 'Dog', breed: 'Mixed' }),
  ])
}

const root = createRoot(document.getElementById('root'))

root.render(createElement(App))

import Pet from '@/components/Pet'
import Logo from '@/components/Logo'

export default function App() {
  return (
    <div>
      <Logo />
      <Pet name="Lori" animal="Dog" breed="Mixed" />
      <Pet name="Tequila" animal="Dog" breed="Pitbull" />
      <Pet name="Lusi" animal="Dog" breed="Mixed" />
    </div>
  )
}

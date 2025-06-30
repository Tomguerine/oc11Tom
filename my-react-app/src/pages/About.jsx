import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import './About.scss'

const items = [
  { title: 'Fiabilité', text: 'Les annonces postées sur Kasa garantissent une fiabilité totale.' },
  { title: 'Respect', text: 'La bienveillance fait partie des valeurs fondatrices de Kasa.' },
  { title: 'Service', text: 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.' },
  { title: 'Sécurité', text: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs.' },
]

export default function About() {
  return (
    <div className="about">
      <Banner image="https://picsum.photos/1200/300?image=1060" />
      {items.map((item) => (
        <Collapse key={item.title} title={item.title}>{item.text}</Collapse>
      ))}
    </div>
  )
}

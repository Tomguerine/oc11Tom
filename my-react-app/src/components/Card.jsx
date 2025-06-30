import { Link } from 'react-router-dom'
import './Card.scss'

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/property/${id}`} className="card">
      {cover && <img src={cover} alt={title} className="card-cover" />}
      <div className="card-title">{title}</div>
    </Link>
  )
}

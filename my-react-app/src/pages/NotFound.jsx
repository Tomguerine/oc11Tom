import { Link } from 'react-router-dom'
import './NotFound.scss'

export default function NotFound() {
  return (
    <main className="notfound">
      <h1>404</h1>
      <p>La page que vous cherchez n'existe pas.</p>
      <Link to="/">Retour à l'accueil</Link>
    </main>
  )
}

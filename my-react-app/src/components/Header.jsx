import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import './Header.scss'

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa logo" className="logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  )
}

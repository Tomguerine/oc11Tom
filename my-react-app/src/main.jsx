import { createRoot } from 'react-dom/client'
import './index.scss'
import Router from './router.jsx'

createRoot(document.getElementById('root')).render(
  <Router />,
)

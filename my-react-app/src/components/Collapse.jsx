import { useState, useId } from 'react'
import './Collapse.scss'

export default function Collapse({ title, children }) {
  const [open, setOpen] = useState(false)
  const contentId = useId()
  return (
    <div className={`collapse ${open ? 'open' : ''}`}>
      <button
        className="collapse-header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={contentId}
      >
        {title}
        <span className="arrow">▼</span>
      </button>
      {open && (
        <div id={contentId} className="collapse-content">
          {children}
        </div>
      )}
    </div>
  )
}

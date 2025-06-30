import './Banner.scss'

export default function Banner({ image, text }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      {text && <div className="banner-text">{text}</div>}
    </div>
  )
}

import './HostInfo.scss'

export default function HostInfo({ name, picture }) {
  return (
    <div className="host-info">
      <img src={picture} alt={name} />
      <span>{name}</span>
    </div>
  )
}

import './RatingStars.scss'

export default function RatingStars({ rating = 0 }) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
        ★
      </span>
    )
  }
  return <div className="rating-stars">{stars}</div>
}

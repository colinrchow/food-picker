import { useState } from 'react'
import { getDishPool } from '../data/dishes'

export default function EliminationScreen({ cuisine, vibes, onDone, onBack }) {
  const [remaining, setRemaining] = useState(() => getDishPool(cuisine, vibes))
  const [round, setRound] = useState(0)

  const a = remaining[0]
  const b = remaining[1]
  const total = remaining.length
  const progress = Math.round(((8 - total) / 7) * 100)

  function eliminate(loser) {
    const next = remaining.filter(d => d.id !== loser.id)
    if (next.length === 1) {
      onDone(next[0])
    } else {
      setRemaining(next)
      setRound(r => r + 1)
    }
  }

  return (
    <div className="screen">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <div className="elim-header">
        <h1>Which are you less feeling?</h1>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="elim-count">{total} left</p>
      </div>
      <div className="elim-cards">
        <button className="dish-card" onClick={() => eliminate(a)}>
          <span className="dish-label">{a.label}</span>
          <span className="dish-x">✕</span>
        </button>
        <div className="elim-or">or</div>
        <button className="dish-card" onClick={() => eliminate(b)}>
          <span className="dish-label">{b.label}</span>
          <span className="dish-x">✕</span>
        </button>
      </div>
    </div>
  )
}

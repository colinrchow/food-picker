import { useRef, useState } from 'react'
import { getDishPool } from '../data/dishes'

export default function EliminationScreen({ cuisine, vibes, onDone, onBack }) {
  const [remaining, setRemaining] = useState(() => getDishPool(cuisine, vibes))
  const initialCount = useRef(remaining.length)

  const a = remaining[0]
  const b = remaining[1]
  const total = remaining.length
  const progress = Math.round(((initialCount.current - total) / (initialCount.current - 1)) * 100)

  function eliminate(loser) {
    const next = remaining.filter(d => d.id !== loser.id)
    if (next.length === 1) {
      onDone(next[0])
    } else {
      setRemaining(next)
    }
  }

  return (
    <div className="screen">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <div className="elim-header">
        <h1>Which <span className="elim-keyword-green">food</span> are you feeling less?</h1>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="elim-count">{total} left</p>
      </div>
      <div className="elim-cards">
        <button className="dish-card" onClick={() => eliminate(a)}>
          <span className="dish-label">{a.label}</span>
        </button>
        <div className="elim-or">or</div>
        <button className="dish-card" onClick={() => eliminate(b)}>
          <span className="dish-label">{b.label}</span>
        </button>
      </div>
    </div>
  )
}

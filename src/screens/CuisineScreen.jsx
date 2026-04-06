import { useState } from 'react'

const CUISINES = [
  { id: 'japanese',      label: 'Japanese',     emoji: '🍱' },
  { id: 'mexican',       label: 'Mexican',       emoji: '🌮' },
  { id: 'italian',       label: 'Italian',       emoji: '🍝' },
  { id: 'thai',          label: 'Thai',          emoji: '🍜' },
  { id: 'chinese',       label: 'Chinese',       emoji: '🥟' },
  { id: 'indian',        label: 'Indian',        emoji: '🍛' },
  { id: 'american',      label: 'American',      emoji: '🍔' },
  { id: 'korean',        label: 'Korean',        emoji: '🥢' },
  { id: 'mediterranean', label: 'Mediterranean', emoji: '🫙' },
  { id: 'vietnamese',    label: 'Vietnamese',    emoji: '🍲' },
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function CuisineScreen({ onDone, onBack }) {
  const [remaining, setRemaining] = useState(() => shuffle(CUISINES))

  const a = remaining[0]
  const b = remaining[1]
  const total = remaining.length
  const progress = Math.round(((CUISINES.length - total) / (CUISINES.length - 1)) * 100)

  function eliminate(loser) {
    const next = remaining.filter(c => c.id !== loser.id)
    if (next.length === 1) {
      onDone(next[0].id)
    } else {
      setRemaining(next)
    }
  }

  return (
    <div className="screen">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <div className="elim-header">
        <h1>Which <span className="elim-keyword-blue">cuisine</span> are you feeling less?</h1>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="elim-count">{total} left</p>
      </div>
      <div className="elim-cards">
        <button className="dish-card" onClick={() => eliminate(a)}>
          <span className="dish-label">{a.emoji} {a.label}</span>
        </button>
        <div className="elim-or">or</div>
        <button className="dish-card" onClick={() => eliminate(b)}>
          <span className="dish-label">{b.emoji} {b.label}</span>
        </button>
      </div>
    </div>
  )
}

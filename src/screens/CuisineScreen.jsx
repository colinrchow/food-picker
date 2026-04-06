import { useState } from 'react'

const CUISINES = [
  { id: 'japanese',      label: 'Japanese',      emoji: '🍱' },
  { id: 'mexican',       label: 'Mexican',        emoji: '🌮' },
  { id: 'italian',       label: 'Italian',        emoji: '🍝' },
  { id: 'thai',          label: 'Thai',           emoji: '🍜' },
  { id: 'chinese',       label: 'Chinese',        emoji: '🥟' },
  { id: 'indian',        label: 'Indian',         emoji: '🍛' },
  { id: 'american',      label: 'American',       emoji: '🍔' },
  { id: 'korean',        label: 'Korean',         emoji: '🥢' },
  { id: 'mediterranean', label: 'Mediterranean',  emoji: '🫙' },
  { id: 'vietnamese',    label: 'Vietnamese',     emoji: '🍲' },
]

export default function CuisineScreen({ onDone, onBack }) {
  const [picked, setPicked] = useState(null)

  return (
    <div className="screen">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <h1>What kind of food?</h1>
      <p className="subtitle">Pick one.</p>
      <div className="cuisine-grid">
        {CUISINES.map(c => (
          <button
            key={c.id}
            className={`cuisine-chip ${picked === c.id ? 'selected' : ''}`}
            onClick={() => setPicked(c.id)}
          >
            <span className="cuisine-emoji">{c.emoji}</span>
            <span>{c.label}</span>
          </button>
        ))}
      </div>
      <button
        className="continue-btn"
        disabled={!picked}
        onClick={() => onDone(picked)}
      >
        Let's go →
      </button>
    </div>
  )
}

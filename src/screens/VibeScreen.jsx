import { useState } from 'react'

const VIBES = [
  { id: 'cozy',        label: 'Cozy',        emoji: '🛋️' },
  { id: 'light',       label: 'Light',        emoji: '🌿' },
  { id: 'indulgent',   label: 'Indulgent',    emoji: '🧈' },
  { id: 'comfort',     label: 'Comfort',      emoji: '🫶' },
  { id: 'adventurous', label: 'Adventurous',  emoji: '🌶️' },
  { id: 'fresh',       label: 'Fresh',        emoji: '🍋' },
  { id: 'hearty',      label: 'Hearty',       emoji: '🥩' },
  { id: 'quick',       label: 'Something quick', emoji: '⚡' },
]

export default function VibeScreen({ onDone }) {
  const [picked, setPicked] = useState([])

  function toggle(id) {
    setPicked(prev =>
      prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
    )
  }

  return (
    <div className="screen">
      <h1>What's the vibe?</h1>
      <p className="subtitle">Pick everything that feels right.</p>
      <div className="vibe-grid">
        {VIBES.map(v => (
          <button
            key={v.id}
            className={`vibe-chip ${picked.includes(v.id) ? 'selected' : ''}`}
            onClick={() => toggle(v.id)}
          >
            <span className="vibe-emoji">{v.emoji}</span>
            <span>{v.label}</span>
          </button>
        ))}
      </div>
      <button
        className="continue-btn"
        disabled={picked.length === 0}
        onClick={() => onDone(picked)}
      >
        Let's go →
      </button>
    </div>
  )
}

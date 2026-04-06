const OPTIONS = [
  { id: 'light',  emoji: '🥗', label: 'Light',  desc: 'Fresh, clean, not too heavy' },
  { id: 'medium', emoji: '🍜', label: 'Medium', desc: 'Satisfying but not a gut bomb' },
  { id: 'heavy',  emoji: '🫕', label: 'Heavy',  desc: 'Comfort food, rich, filling' },
]

export default function VibeScreen({ onDone }) {
  return (
    <div className="screen">
      <h1>How hungry are you?</h1>
      <div className="weight-options">
        {OPTIONS.map(o => (
          <button key={o.id} className="weight-card" onClick={() => onDone(o.id)}>
            <span className="weight-emoji">{o.emoji}</span>
            <div className="weight-text">
              <span className="weight-label">{o.label}</span>
              <span className="weight-desc">{o.desc}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

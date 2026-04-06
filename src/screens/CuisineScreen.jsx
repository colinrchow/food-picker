import EliminationGame from '../components/EliminationGame'

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

const HEADING = <>Which <span className="elim-keyword-blue">cuisine</span> are you feeling less?</>

export default function CuisineScreen({ onDone, onBack }) {
  return (
    <EliminationGame
      items={CUISINES}
      heading={HEADING}
      renderLabel={c => `${c.emoji} ${c.label}`}
      onDone={c => onDone(c.id)}
      onBack={onBack}
    />
  )
}

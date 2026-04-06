const BLURBS = [
  "The bracket has spoken. No notes.",
  "Honestly? Iconic choice.",
  "Your gut knew all along.",
  "The people have decided. (The people is you.)",
  "This was always the answer.",
  "Science. Pure science.",
  "Trust the process. The process chose wisely.",
  "Destiny, but make it delicious.",
]

function getBlurb() {
  return BLURBS[Math.floor(Math.random() * BLURBS.length)]
}

export default function ResultScreen({ winner, onRestart }) {
  const blurb = getBlurb()

  return (
    <div className="screen result-screen">
      <div className="result-winner">
        <p className="result-label">Tonight you're having</p>
        <h1 className="result-dish">{winner.label}</h1>
      </div>
      <div className="result-blurb-box">
        <p className="result-blurb">{blurb}</p>
      </div>
      <button className="continue-btn" onClick={onRestart}>
        Start over
      </button>
    </div>
  )
}

const BLURBS = [
  "The bracket has spoken. No notes.",
  "Honestly? Iconic choice.",
  "Your gut knew all along.",
  "The people have decided. (The people is you.)",
  "This was always the answer.",
  "Science. Pure science.",
  "Trust the process. The process chose wisely.",
  "Destiny, but make it delicious.",
  "No notes. Zero. Flawless.",
  "This is the way.",
  "Your future self is already happy.",
  "The algorithm does not miss.",
  "Called it.",
  "You were always going to end up here.",
  "Statistically speaking, this is correct.",
  "A decision has been made. Respect it.",
  "The bracket never lies.",
  "Some things are just meant to be.",
  "Resistance is futile. Dinner is chosen.",
  "This one had main character energy from the start.",
  "Bold. Decisive. Hungry.",
  "The heart wants what it wants.",
  "Every elimination led here. It was always this.",
  "You may not have known. But you knew.",
  "The vibes were immaculate.",
  "Honestly this was obvious in retrospect.",
  "The universe conspired. You just clicked some buttons.",
  "No regrets. Only dinner.",
  "History will remember this as a great choice.",
  "That's the one. That's always been the one.",
  "A classic. A legend. A meal.",
  "Other foods didn't stand a chance.",
  "Let the record show: excellent taste.",
  "You came, you chose, you conquered.",
  "This is what winning feels like.",
  "The moment of clarity has arrived.",
  "Certified correct answer.",
  "We did it. You did it. Dinner did it.",
  "No further questions.",
  "The council has deliberated. Enjoy.",
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

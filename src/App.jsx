import { useState } from 'react'
import VibeScreen from './screens/VibeScreen'
import CuisineScreen from './screens/CuisineScreen'
import EliminationScreen from './screens/EliminationScreen'
import ResultScreen from './screens/ResultScreen'
import './App.css'

const INITIAL = { weight: null, cuisine: null, winner: null }

function App() {
  const [screen, setScreen] = useState('vibes')
  const [selected, setSelected] = useState(INITIAL)

  function handleWeightDone(weight) {
    setSelected(s => ({ ...s, weight }))
    setScreen('cuisine')
  }

  function handleCuisineDone(cuisine) {
    setSelected(s => ({ ...s, cuisine }))
    setScreen('elimination')
  }

  function handleDishDone(winner) {
    setSelected(s => ({ ...s, winner }))
    setScreen('result')
  }

  function handleRestart() {
    setSelected(INITIAL)
    setScreen('vibes')
  }

  return (
    <div className="app">
      {screen === 'vibes' && (
        <VibeScreen onDone={handleWeightDone} />
      )}
      {screen === 'cuisine' && (
        <CuisineScreen
          onDone={handleCuisineDone}
          onBack={() => setScreen('vibes')}
        />
      )}
      {screen === 'elimination' && (
        <EliminationScreen
          cuisine={selected.cuisine}
          weight={selected.weight}
          onDone={handleDishDone}
          onBack={() => setScreen('cuisine')}
        />
      )}
      {screen === 'result' && (
        <ResultScreen
          winner={selected.winner}
          onRestart={handleRestart}
        />
      )}
    </div>
  )
}

export default App
